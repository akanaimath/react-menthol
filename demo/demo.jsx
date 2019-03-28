'use strict';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { cloneObject, mergeObjects, cloneProps } from 'react-utility';
import {  Loading, Error, Maintenance, NoData, Legend, Tooltip } from '../build/menthol.js';

class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = cloneProps(props);
	}
	render() {
		return (
			<div className="demo-consume">
				<div className="demo-header">Demo for MENTHOL Elements </div>
				<div className="demo-comp-container">
					<div className="demo-comp-box"><div className="demo-comp-box-heading">Loading Demo</div><Loading /></div>
					{/* <div className="demo-comp-box"><MIcon /></div> */}
					<div className="demo-comp-box"><div className="demo-comp-box-heading">Error Demo</div><Error /></div>
					<div className="demo-comp-box"><div className="demo-comp-box-heading">Maintenance Demo</div><Maintenance /></div>
					<div className="demo-comp-box"><div className="demo-comp-box-heading">NoData Demo</div><NoData /></div>
					<div className="demo-comp-box"><div className="demo-comp-box-heading">Legend Demo</div><Legend data={this.state.legendData} /></div>
					<div className="demo-comp-box">
					<div className="demo-comp-box-heading">Tooltip Demo</div>
						<Tooltip
							heading="Tooltip heading"
							data={this.state.tooltipData}
							dataObj={this.state.tooltipDataObj} /></div>
				</div>
			</div>)
	}
	static defaultProps = {
		legendData: [{ active: true, key: "Example1", color: "yellow" }, { active: false, key: "Example2", color: "red" }],
		tooltipData: [{ key: "x", alias: "X-value", color: "black" }, { key: "y", alias: "Y-value", color: "black" }],
		tooltipDataObj: { x: 1, y: 2, z: 4 },
	}
}

render(<Demo />, document.getElementById('app'));