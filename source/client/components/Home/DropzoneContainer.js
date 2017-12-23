import React, { Component } from 'react';
import Dropzone from 'react-dropzone/dist/index';

class DropzoneContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Dropzone />
            </div>
        );
    }
}

export default DropzoneContainer;
