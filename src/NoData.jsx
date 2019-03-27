'use strict';
import React, { Component } from 'react';

import { cloneProps } from 'react-utility';

class NoData extends Component {
  constructor(props) {
    super(props);
    this.state = cloneProps(props);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(cloneProps(nextProps));
  }

  render() {
    return (
      <div className={this.state.classNameWrapper}>
        <div className={this.state.classNameIconDiv}>ICON</div>
        <div className={this.state.classNameHeading}>{this.state.heading}</div>
        <p className={this.state.classNameParagraph}>{this.state.paragraph}</p>
      </div>
    );
  }
  static defaultProps = {
    heading: `No Matching items found!`,
    paragraph: `check the settings or refresh `,

    classNameWrapper: 'chtr-No-data-wrapper',
    // classNameIcon: "icon",
    classNameHeading: "noData-heading",
    classNameIconDiv: "noData-iconDiv",
    classNameParagraph: "noData-paragraph"
  };
}

export default NoData;
//End of NoData comp