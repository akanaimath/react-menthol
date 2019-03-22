'use strict';
import React, { Component } from 'react';
import { cloneProps } from 'react-utility';
import * as SvgTypes from '../public/images/svg';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = cloneProps(props);
    }
    componentWillReceiveProps(nextProps) {
        this.setState(cloneProps(nextProps));
    }

    render() {
        const { styles, svgType } = this.state;
        const style = {
            width: this.state.width,
            height: this.state.height,
            marginLeft: this.state.marginLeft,
            marginTop: this.state.marginTop,
            ...styles
        };
        const svg = SvgTypes[svgType]
        return (
            <div className={this.state.classNameWrapper}>
                {this.state.loadSvg ?
                    (<div
                        style={style}
                        dangerouslySetInnerHTML={{ __html: svg }}
                        className={this.state.classNameImg}
                    />)
                    : (<img style={style}
                        src={this.state.loadingImg}
                        alt={this.state.alt}
                        className={this.state.classNameImg} />)
                }

            </div>
        );
    }
}
const css = {
    width
}
Loading.defaultProps = {
    loadSvg: false,
    svgType: 'balls', // balls,bars,bubbles,cubes,spin,spinningBubbles,spokes
    loadingImg: '/images/spinner.gif',
    alt: 'img not found',
    width: '90px',
    height: '90px',
    marginLeft: '35%',
    marginTop: '5%',
    styles: {},
    classNameWrapper: 'consume',
    classNameImg: ''
}
Object.assign(Loading.defaultProps, css);
export default Loading;