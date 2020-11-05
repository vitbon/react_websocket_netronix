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

      // formating the measurements
      messages.map((item, dex) => {
        let str = "";
        item.measurements.forEach((element, idx) => {
          if(element[1].length >= 2) str += `Data[${idx}] = ${element[0]}, {${element[1]}}; \n`;
            else if(element[1].length === 1) str += `Data[${idx}] = {${element[0]},  ${element[1]}}; \n`;
              else str += `Data[${idx}] = ${element}; \n`;
        });
        item.measurements = str;
        item.uniqKey = str.concat(item._id, item.name)
        return item;
      });

      let accumul = this.state.messages.slice().concat(messages);
      if (accumul.length > 14) accumul.splice(0, 3);
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