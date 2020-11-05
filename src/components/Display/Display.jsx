import React, { Component } from 'react';
import './display.css';

export default class Display extends Component {
  render() {
		return (
			<div className="container">
				<div className="header">
					<table width="100%" cellSpacing="2px" key={Date.now()*Math.random()}>
						<tbody key={Date.now()*Math.random()}>
							<tr key={Date.now()*Math.random()}>
								<td width="22%" key={Date.now()*Math.random()}>_ID</td>
								<td width="15%" key={Date.now()*Math.random()}>Name</td>
								<td width="12%" key={Date.now()*Math.random()}>Unit</td>
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
									<td width="22%" 
											className={item.name.substr(0,3).toLowerCase()}
											key={Date.now()*Math.random()}
									>
										{item._id}
									</td>
									<td width="15%" 
											className={item.name.substr(0,3).toLowerCase()}
											key={Date.now()*Math.random()}
									>
										{item.name}
									</td>
									<td width="12%" 
											className={item.name.substr(0,3).toLowerCase()}
											key={Date.now()*Math.random()}
									>
										{item.unit}
									</td>
									<td className={item.name.substr(0,3).toLowerCase()}
											key={Date.now()*Math.random()}
									>
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