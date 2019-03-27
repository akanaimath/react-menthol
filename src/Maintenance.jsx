'use strict';
import React, { Component } from 'react';

import { cloneProps } from 'react-utility';

class Maintenance extends Component {
  constructor(props) {
    super(props);
    this.state = cloneProps(props);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(cloneProps(nextProps));
  }

  render() {
    const style = {
      width: this.state.width,
      height: this.state.height,
    };
    return (
      <div className={this.state.classNameWrapper} style={{ textAlign: 'center' }}>
        <h3>{this.state.heading}</h3>
        <p>{this.state.paragraph}</p>
        <img style={style}
          src={this.state.src}
          alt={this.state.alt}
          className={this.state.classNameImg} />
      </div>
    );
  }
  static defaultProps = {
    src: '../public/images/underProgress.gif',
    alt: 'img not found',
    width: '100px',
    height: '75px',
    heading: `We'll be back soon!`,
    paragraph: `Sorry for the inconvinence,but we're performing some maintenance at the moment`,
    classNameWrapper: 'consume',
    classNameImg: ''
  };
}

export default Maintenance;
//End of Maintenance comp