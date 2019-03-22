'use strict';
import React, { Component } from 'react';
import { cloneObject, mergeObjects, cloneProps } from 'react-utility';

let ICONS = null;

class MIcon extends Component {
    constructor(props) {
        super(props);
        this.state = cloneProps(props);
    }
    render() {
        return <div>TestICOn</div>
    }
}
const css = {
    iconFamily: "fa", // 
}
MIcon.defaultProps = {

}
Object.assign(MIcon.defaultProps, css);
export default MIcon;