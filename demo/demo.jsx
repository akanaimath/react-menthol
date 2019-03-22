'use strict';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { cloneObject, mergeObjects, cloneProps } from 'react-utility';
import { MIcon, Loading } from '../build/menthol.js';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = cloneProps(props);
    }
    render() {
        return (<div>
            <div>this is demo</div>
            <Loading />
            <MIcon />
        </div>)
    }
}

render(<Demo />, document.getElementById('app'));