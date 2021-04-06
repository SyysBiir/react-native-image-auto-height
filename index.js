import React, { useState } from 'react';
import { Image } from 'react-native';

const ImageAutoHeight = (props) => {
    var propsImageWidth, propsImageHeight, imageUri;
    if(props.style.length) {
        propsImageWidth = props.style[props.style.length-1].width;
        propsImageHeight = props.style[props.style.length-1].height;
    } else {
        propsImageWidth = props.style.width;
        propsImageHeight = props.style.height;
    }

    const [ ImageHeight, setImageHeight ] = useState(propsImageHeight);

    if(propsImageHeight == 'auto') {
        imageUri = props.source.uri ? props.source.uri : Image.resolveAssetSource(props.source).uri;
        Image.getSize(imageUri, (imgWidth, imgHeight) => {
            setImageHeight((imgHeight * (propsImageWidth)) / imgWidth)
        });
    }

    return (<Image {...props} style={[props.style, {
        height: ImageHeight,
    }]}/>)
}

export default ImageAutoHeight;