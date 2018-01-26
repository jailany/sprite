import React from 'react';
const HeroText = (props) => {
    const titleStyle = {
        fontWeight : 'bold',
        marginBottom : '20px'
    }
    return (
        <div className="text_center">
            <h1 style={titleStyle}>SVG Merge</h1>
            <h5 className="subtitle_text">An online tool for merging multiple SVGs into a single SVG file which can be used as inline sprite for
                icon systems using scalable vector graphics.</h5>
        </div>
    )
}

export default HeroText;
