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
        this.props.update(files);
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
        this.props.update(newfiles);
        (newfiles.length > 0) ? this.setState({files : newfiles}) : this.setState({files : newfiles, dropzoneVisible : true});
    }

    resetFilesHandler(){
        this.props.update([]);
        this.setState({files : [], dropzoneVisible : true});
    }

    uploadFilesHandler(){
        const data = new FormData();
        const uploadedFiles = this.state.files;
        console.log(uploadedFiles);
        console.log(data);
    }

    render() {
        const dropzoneStyles = {
            width : '100%',
            height : 'calc(100vh - 30px)',
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
            padding : '0'
        }

        const placeHolderStyle = {
            color : '#1664c0',
            fontWeight : 'bold'
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
                        </div>
                        <div className="buttonWrapper">
                            <div className="buttonContainer"><button onClick={this.uploadFilesHandler.bind(this)} className="uploadButton">Upload</button></div>
                            <div className="buttonContainer"><button onClick={this.resetFilesHandler.bind(this)} className="resetButton">Reset</button></div>
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
