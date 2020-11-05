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

      // formating the datestamp and value
      messages.map((item, dex) => {
        let str = "";
        let formattedTime = "";
        item.measurements.forEach((element, idx) => {
          const date = new Date(element[0] * 1000);
          formattedTime = `Date: ${date.toLocaleString()}.  Value: `;
          console.log('formattedTime: ', formattedTime);
          if(element[1].length >= 2) str = `${element[0]}, {${element[1]}}.`;
            else if(element[1].length === 1) str = `{${element[0]},  ${element[1]}}.`;
              else str = `${element}.`;
        });
        item.measurements = formattedTime + str;
        item.uniqKey = str.concat(item._id, item.name)        
        return item;
      });

      let accumul = this.state.messages.slice().concat(messages);
      if (accumul.length >= 20) accumul.splice(0, 3);
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