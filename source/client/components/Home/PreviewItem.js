import React from 'react';

const PreviewItem = (props) => {
    return (
        <div className="iconPreviewItemWrapper">
            <div className="iconPreviewItem">
                <img className="iconPreviewImage" src={props.file.preview} />
                <p className="iconPreviewName">{props.file.name}</p>
                <div onClick={() => props.removeIconHandler(props.file.name)} className="iconPreviewRemove">&#10005;</div>
            </div>
        </div>
    )
}

export default PreviewItem;
