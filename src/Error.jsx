'use strict';
import React, { Component } from 'react';

import { cloneProps } from 'react-utility';

class Error extends Component {
	constructor(props) {
		super(props);
		this.state = cloneProps(props);
	}
	componentWillReceiveProps(nextProps) {
		this.setState(cloneProps(nextProps));
	}

	toggleErrorBox = () => {
		this.setState({ showErrorMsg: true, showErrorIcon: false });
	}
	handleClose = (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ showErrorMsg: false, showErrorIcon: true });
	}
	render() {
		return (
			<div className={this.state.classNameErrorWrapper} style={{ position: "relative" }} onClick={this.toggleErrorBox}>
				{this.state.showErrorMsg &&
					<div className={this.state.className}>
						<div className={this.state.classNameClose} onClick={this.handleClose} title="close">
							Close
            </div>
						<div className={this.state.classNameErrorMsg}>{`${this.state.error}`}</div>
					</div>
				}
				{this.state.showErrorIcon &&
					(<div className={this.state.classNameOctagon}>
						<p className={this.state.classNameError}>Error</p>
						<div className={this.state.classNameShape}></div>
					</div>)
				}

			</div>
		);

	}
	static defaultProps = {
		showErrorMsg: false,
		showErrorIcon: true,
		error: false,
	};

}
const errorCss = {
	classNameErrorWrapper: "consume",
	className: "consume",
	classNameOctagon: "shape-octagon",
	classNameErrorMsg: "error-msg",
	classNameError: "error-label",
	classNameShape: "error-shape",
	classNameClose: "error-close",
	//   classNameCloseIcon: "icon-uniE642"
};
Object.assign(Error.defaultProps, errorCss);

export default Error;
//End of Error comp