import React, { Component } from 'react';
import Dropzone from 'react-dropzone/dist/index';
import homeStyles from './home.scss';

class DropzoneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files : []
        }
    }

    onDrop(files){
        console.log(files)
        this.setState({
            files : files
        });
    }

    renderSvgList(){
        if(this.state.files.length > 0){
            return this.state.files.map(file => {
                return (
                    <div className="iconPreviewItemWrapper" key={file.name}>
                        <div className="iconPreviewItem">
                            <img className="iconPreviewImage" src={file.preview} />
                            <p className="iconPreviewName">{file.name}</p>
                        </div>
                    </div>
                );
            })
        }
    }

    render() {
        const dropzoneStyles = {
            width : '100%',
            height : '500px',
            backgroundColor : '#f2f2f2',
            border : '1px solid #e2e2e2',
            borderRadius : '8px',
            overflow : 'hidden',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            color : '#636363',
            fontSize : '1.2em',
            fontWeight : '500'
        };

        const dropzoneRejectStyles = {
            color : 'red'
        }

        const wrapperStyles = {
            padding : '1em'
        }

        const placeHolderStyle = {

        }

        return (
            <div style={wrapperStyles}>
                <Dropzone accept="image/svg+xml" style={dropzoneStyles} rejectStyle={dropzoneRejectStyles} onDrop={this.onDrop.bind(this)}>
                    <div>Drop files here to create the sprite</div>
                </Dropzone>

                <div>
                    <div>
                        {this.renderSvgList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DropzoneContainer;
