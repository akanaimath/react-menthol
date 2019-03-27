'use strict';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { cloneObject, mergeObjects, cloneProps } from 'react-utility';
import { MIcon, Loading, Error, Maintenance, NoData, Legend, Tooltip } from '../build/menthol.js';

class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = cloneProps(props);
	}
	render() {
		return (
			<div className="demo-consume">
				<div>This is demo</div>
				<div className="demo-comp-container">
					<div className="demo-comp-box"><Loading /></div>
					<div className="demo-comp-box"><MIcon /></div>
					<div className="demo-comp-box"><Error /></div>
					<div className="demo-comp-box"><Maintenance /></div>
					<div className="demo-comp-box"><NoData /></div>
					<div className="demo-comp-box"><Legend data={this.state.legendData} /></div>
					<div className="demo-comp-box">
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