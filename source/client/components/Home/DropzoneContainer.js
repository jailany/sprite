import React, { Component } from 'react';
import Dropzone from 'react-dropzone/dist/index';
import homeStyles from './home.scss';
import PreviewItem from './PreviewItem';

class DropzoneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files : [],
            dropzoneVisible : true
        }
    }

    onDrop(files, rejectedFiles){
        console.log(files);
        if(rejectedFiles.length == 0 && files.length > 0){
            this.setState({
                files : files,
                dropzoneVisible : false
            });
        }
    }

    renderSvgList(){
        if(this.state.files.length > 0){
            return this.state.files.map(file => {
                return <PreviewItem key={file.name} file={file} removeIconHandler={this.removeIconHandler.bind(this)}/>
            })
        }
    }

    removeIconHandler(name){
        const files  = this.state.files;
        const newfiles = files.filter(file => {
            return !(file.name == name)
        });
        (newfiles.length > 0) ? this.setState({files : newfiles}) : this.setState({files : newfiles, dropzoneVisible : true});
    }

    resetFilesHandler(){
        this.setState({files : [], dropzoneVisible : true});
    }

    uploadFilesHandler(){
        console.log("upload");
    }

    render() {
        const dropzoneStyles = {
            width : '100%',
            height : '500px',
            backgroundColor : '#40798c42',
            overflow : 'hidden',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            color : '#0b2028',
            fontSize : '1.2em',
            fontWeight : '500'
        };

        const dropzoneRejectStyles = {
            color : 'red'
        }

        const wrapperStyles = {
            padding : '1em 0'
        }

        const placeHolderStyle = {
            padding: '8em',
            border : 'dashed 2px #0b2028'
        }

        return (
            <div>
                <div style={wrapperStyles} className={"dropzoneWrapper" + " " + (this.state.dropzoneVisible ? "dropzoneVisible " : "")}>
                    <Dropzone accept="image/svg+xml" style={dropzoneStyles} rejectStyle={dropzoneRejectStyles} onDrop={this.onDrop.bind(this)}>

                        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                            if (isDragReject) {
                                return <div style={placeHolderStyle}>File format not supported. Upload SVG files.</div>;
                            }
                            return rejectedFiles.length
                              ? <div style={placeHolderStyle}>Some files are of unsupported format. Upload SVG files.</div>
                              : <div style={placeHolderStyle}>Drop files here to create the sprite</div>;
                          }}
                    </Dropzone>
                </div>
                {(this.state.files.length > 0) ?
                    <div>
                        <div className="previewWrapper">
                            {this.renderSvgList()}
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="offset-md-10 col-md-1 noPadding">
                                        <div className="buttonContainer"><button onClick={this.uploadFilesHandler.bind(this)} className="uploadButton">Upload</button></div>
                                    </div>
                                    <div className="col-md-1 noPadding">
                                        <div className="buttonContainer"><button onClick={this.resetFilesHandler.bind(this)} className="resetButton">Reset</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

export default DropzoneContainer;
