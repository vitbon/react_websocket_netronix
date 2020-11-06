import React from 'react';
import Display from '../Display/Display.jsx';

export default class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: []
    }
  }
  
  componentDidMount(){
    // initializing Socket
    this.socket = new WebSocket('wss://jsdemo.envdev.io/ws');

    // connected successfully
    this.socket.onopen = () => {
      console.log("Connected successfully!");
    };

    // received data from device and format it
    this.socket.onmessage = event => { 
      let messages = JSON.parse(event.data);

      // formating timestamp and value
      messages.map((item, dex) => {
        let str = "";
        let formattedTime = "";
        item.measurements.forEach((element, idx) => {
          const date = new Date(element[0] * 1000);
          formattedTime = `${date.toLocaleString()}`;
          if (element[1].length >= 2) str = `[${element[1]}]`;
            else str = `${element[1]}`;
        });
        item.measurements = str;
        item.timeStamp = formattedTime;
        item.uniqKey = str.concat(item._id, item.name)        
        return item;
      });
      messages.filter((item, index) => messages.indexOf(item._id) === index);

      // updating of new messages
      let accumul = this.state.messages.slice();

      for (let i=0; i<messages.length; i++) {
        let hasID = false;
        for (let j=0; j<accumul.length; j++) {
            if (messages[i]._id === accumul[j]._id) {
              if (messages[i].timeStamp && messages[i].measurements) {
                accumul[j].timeStamp = messages[i].timeStamp;
                accumul[j].measurements = messages[i].measurements;                
                accumul[j].unit = messages[i].unit;
                accumul[j].uniqKey = messages[i].uniqKey;
              }
              hasID = true;
            }
        }
        if (!hasID) // update values
          accumul.push(messages[i]);
      }
      this.setState({ messages: accumul });      
    };

    // encountered error
    this.socket.onerror = err => {
      console.log(`Socket encountered error: ${err.message}. Closing socket.`);
      this.socket.close();
    };

    // connection lost
    this.socket.onclose = event => {
      if (event.wasClean) console.log(`Socket was closed clearly, code=${event.code}.`);
        else console.log('The connection was lost.');
    };
  };

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <div>
        <Display messages={this.state.messages} key={this.state.messages.uniqKey} />
      </div>
    );
  }
};