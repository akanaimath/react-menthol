// Need to get something more optimized

// 'use strict';
// import React, { Component } from 'react';
// import { cloneObject, mergeObjects, cloneProps } from 'react-utility';
// import * as FA from 'react-icons/lib/fa';
// import * as IO from 'react-icons/lib/io';
// import * as MD from 'react-icons/lib/md';
// import * as TI from 'react-icons/lib/ti';
// import * as GO from 'react-icons/lib/go';
// import * as FI from 'react-icons/lib/fi';
// import * as GI from 'react-icons/lib/gi';
// import * as WI from 'react-icons/lib/wi';
// import * as DI from 'react-icons/lib/di';

// class MIcon extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = this.buildState(props);
// 	}
// 	buildState = (props) => {
// 		const state = cloneProps(props);
// 		const flag = state.allFamilies.includes(state.iconFamily);
// 		if (flag) {
// 			if (!Object.keys(FA).includes(state.name)) {
// 				state.errorMsg = `iconFamily [${state.iconFamily}] does not have any icon name [${state.name}]`;
// 			}
// 			else {
// 				this.MNB = FA[state.name]
// 			}
// 		}
// 		else {
// 			state.errorMsg = `iconFamily entered ${state.iconFamily},should be from ${state.allFamilies}`
// 		}
// 		return state;
// 	}
// 	componentWillReceiveProps(nextProps) {
// 		const newProps = buildState(nextProps);
// 		console.log('rcv', newProps);
// 		this.setState(newProps);
// 	}

// 	render() {
// 		console.log('state', this.state, 'this.MNB', this.MNB);

// 		if (this.state.errorMsg.length > 0) {
// 			return <div>{this.state.errorMsg}</div>
// 		}
// 		else {
// 			console.log('Obj');
// 			// const MNB = this.MNB;
// 			return <div>TestICon <FA.FaBlackTie /> for the black tie</div>
// 		}

// 	}
// }
// const css = {
// 	// iconFamily: "fa", // 
// }
// MIcon.defaultProps = {
// 	iconFamily: "fa",
// 	name: "FaBlackTie",

// 	allFamilies: ["fa", "io", "md", "ti", "go", "fi", "gi", "wi", "di"],
// 	errorMsg: "",
// 	// ICONS:null,
// }
// Object.assign(MIcon.defaultProps, css);
// export default MIcon;







// switch (state.iconFamily) {
//     case "fa": import('react-icons/fa').then((data) => { ICONS = cloneObject(data); }); break;
//     case "io": import('react-icons/io').then((data) => { ICONS = data; }); break;
//     case "md": import('react-icons/md').then((data) => { ICONS = data; }); break;
//     case "ti": import('react-icons/ti').then((data) => { ICONS = data; }); break;
//     case "go": import('react-icons/go').then((data) => { ICONS = data; }); break;
//     case "fi": import('react-icons/fi').then((data) => { ICONS = data; }); break;
//     case "gi": import('react-icons/gi').then((data) => { ICONS = data; }); break;
//     case "wi": import('react-icons/wi').then((data) => { ICONS = data; }); break;
//     case "di": import('react-icons/di').then((data) => { ICONS = data; }); break;
//     default: import('react-icons/fa').then((data) => { ICONS = data; }); break;
// }