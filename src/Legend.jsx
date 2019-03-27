'use strict';
import React, { Component } from 'react';

import { cloneProps } from 'react-utility';

class Legend extends Component {
	constructor(props) {
		super(props);
		this.state = cloneProps(props);
	}
	componentWillReceiveProps(nextProps) {
		this.setState(cloneProps(nextProps));
	}

	handleLegendClick = (e, obj) => {
		e.preventDefault();
		this.state.onClick({ e: e, data, obj });
	}
	render() {
		const { layout, data } = this.state;
		let style1, style2;
		if (layout == "vertical") {
			style1 = { display: 'grid' };
			style2 = { marginTop: "7px" };
		}
		else if (layout == "horizontal") {
			style1 = {};
			style2 = {};
		}
		return (
			<div className={this.state.classNameWrapper} style={{ position: "relative" }}>
				<ul className={this.state.classNameLegendWrapper} style={style1}>
					{data.map((obj, index) => {
						let colorStyle = { backgroundColor: obj.color };
						obj.active = obj.hasOwnProperty("active") ? obj.active : true;
						if (!obj.active) {
							colorStyle = {
								backgroundColor: "#FFFFFF",
								boxShadow: "rgb(216, 221, 230) 0px 0px 10px 1px inset"
							}
						}
						return (
							<li key={`${index}.${obj.key}`} className={this.state.classNameLegendList} style={style2} onClick={(e) => { this.handleLegendClick(e, obj) }}>
								<div style={colorStyle} className={this.state.classNameLegendTick} />
								<div className={this.state.classNameLegendName}>{obj.key}</div>
							</li>
						)
					})}
				</ul>
			</div>
		);

	}
	static defaultProps = {
		layout: "horizontal", // vertical
		data: [],
		/*
			data = [{ key: "Example1", color:"#FFFFFF", active: true },
            { key: "Example2", color:"#000000", active: true }]
		*/
		onClick:()=>{},
	};

}
const Css = {
	classNameWrapper: "consume",
	classNameLegendWrapper: "legend-wrapper",
  classNameLegendList: "legend-list",
  classNameLegendTick: "legend-tick",
  classNameLegendName: "legend-name",
};
Object.assign(Legend.defaultProps, Css);

export default Legend;
//End of Legend comp