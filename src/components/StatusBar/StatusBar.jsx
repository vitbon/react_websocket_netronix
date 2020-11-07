import React, { Component } from 'react';
import './statusBar.css';

export default class StatusBar extends Component {
  render() {
    const { server, info, error } = this.props.status;
    let connection = error ? "fail" : "good";

		return (
			<footer>
        <span>
          Server: <span className="primary">{server}</span>
        </span>
        <span>
          Status: <span className={connection}>{info}&nbsp;</span>
        </span>
        <span>
          Copyright: <span className="primary">© Netronix, 2020&nbsp;&nbsp;</span>
        </span>
      </footer>
		);
  }
}