import React, { Component } from 'react';
import { render } from 'react-dom';
// const React = require('react');


class Image extends Component {
    render() {
        return (
            <div>
                <p>image added</p>
        {/* <img src='/mnt_zion.jpg'/> */}
        </div>
        )
    }
}

render(<Image />, document.querySelector('#root'));