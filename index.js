import React, { useState } from 'react';
import { Image } from 'react-native';

const ImageAutoHeight = (props) => {
    var propsImageWidth, propsImageHeight;
    if(props.style.length) {
        propsImageWidth = props.style[props.style.length-1].width;
        propsImageHeight = props.style[props.style.length-1].height;
    } else {
        propsImageWidth = props.style.width;
        propsImageHeight = props.style.height;
    }

    const [ ImageHeight, setImageHeight ] = useState(propsImageHeight);

    if(propsImageHeight == 'auto') {
        if(props.source.uri) {
            Image.getSize(props.source.uri, (imgWidth, imgHeight) => {
                setImageHeight((imgHeight * (propsImageWidth)) / imgWidth)
            });
        } else {
            setImageHeight(Image.resolveAssetSource(props.source).height)
        }
    }

    return (<Image {...props} style={[props.style, {
        height: ImageHeight,
    }]}/>)
}

export default ImageAutoHeight;