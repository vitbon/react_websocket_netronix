import React, { Component } from 'react';
import './display.css';

export default class Display extends Component {
  render() {
		const bbb = Math.round((Math.random()*1000))%2;
		const blink = bbb ? "blink" : "";
		return (
			<div className="container">
				<div className="header">
					<table width="100%" cellSpacing="2px" key={Date.now()*Math.random()}>
						<tbody key={Date.now()*Math.random()}>
							<tr key={Date.now()*Math.random()}>
								<td width="25%" key={Date.now()*Math.random()}>_ID</td>
								<td width="15%" key={Date.now()*Math.random()}>Name</td>
								<td width="10%" key={Date.now()*Math.random()}>Unit</td>
								<td width="20%" key={Date.now()*Math.random()}>Date & Time</td>
								<td key={Date.now()*Math.random()}>Measurements</td>
							</tr>
						</tbody>	
					</table>
				</div>
				<div className="wrapper" key={Date.now()*Math.random()}>
					{ this.props.messages.map( item =>
						<table width="100%" cellSpacing="2px" key={Date.now()*Math.random()}>
							<tbody key={Date.now()*Math.random()}>
								<tr key={Date.now()*Math.random()}>
									<td width="25%" 
											className={item.name.substr(0,3).toLowerCase()}
											key={Date.now()*Math.random()}
									>
										{item._id}
									</td>
									<td width="15%" key={Date.now()*Math.random()}>
										{item.name}
									</td>
									<td width="10%" key={Date.now()*Math.random()}>
										{item.unit}
									</td>
									<td width="20%" key={Date.now()*Math.random()} className={item.blink}>
										{item.timeStamp}
									</td>
									<td key={Date.now()*Math.random()} className={item.blink}>
										{item.measurements}
									</td>
								</tr>
							</tbody>			
						</table>
					)}
				</div>
			</div>
		);
  }
}