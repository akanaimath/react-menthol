'use strict';
import React, { Component } from 'react';

import { cloneProps, strReplaceParams } from 'react-utility';

class Tooltip extends Component {
	constructor(props) {
		super(props);
		this.state = cloneProps(props);
	}
	componentWillReceiveProps(nextProps) {
		this.setState(cloneProps(nextProps));
	}

	render() {
		const { data, dataObj, heading } = this.state;
		if (typeof data[0] == "undefined" || typeof data == null || typeof data[0] == null) {
			return "";
		}
		// const newHeading = strReplaceParams(this.state.regexForReplaceParamInHeading, heading, dataObj);
		// above import needs to fix
		const newHeading = heading;
		if (typeof data[0] == 'string') {
			const Obj = {};
			for (let i = 0; i < data.length; i++) {
				const temp = data[i],
					temp2 = dataObj[temp];
				Obj[temp] = temp2;
			}
			let content = '';
			for (let property in Obj) {
				if (typeof (Obj[property]) != "undefined" && Obj[property] != null) {
					content += property + ': ' + Obj[property].toLocaleString() + '\n';
				} else {
					content += property + ': ' + "NULL" + '\n';
				}
			}
			return (
				<div className={this.state.classNameTooltip}>
					{newHeading && <div className={this.state.classNameTooltipHeading}>{newHeading}</div>}
					<small>{content}</small>
				</div>)
		}
		else if (typeof data[0] == 'object') {
			// const Obj = {};

			return (
				<div className={this.state.classNameTooltip}>
					{newHeading && <div className={this.state.classNameTooltipHeading}>{newHeading}</div>}
					{data.map((row, index) => {
						const style = { color: row.color };
						const label = (row.alias.length > 0 ? row.alias : row.key);
						let value;
						if (typeof (dataObj[row.key]) == 'undefined' || dataObj[row.key] == null) {
							value = "NULL"
						} else {
							value = dataObj[row.key];
						} return (<div style={style} key={`${index}.${label}`}>{label}:&nbsp;&nbsp;{value}</div>)
					})
					}
				</div>)
		}

	}
	static defaultProps = {
		data: [],
		/**
		 * data = [ {key : x, alias:"Xvalue", color:"black"},{key : y, alias:"Yvalue", color:"black"}]
		 */
		dataObj: {},
		/**
		 * { x: 1, y:2 ,z: 4 }
		 */
		heading: "",
		regexForReplaceParamInHeading: /\${(.*?)\}/g,
	};

}
const Css = {
	classNameWrapper: "consume",
	classNameTooltip: "menthol-tooltip",
  classNameTooltipHeading: "menthol-tooltip-heading",

};
Object.assign(Tooltip.defaultProps, Css);

export default Tooltip;
//End of Tooltip comp