# react-native-image-auto-height

This component provides you with an easy way to automatically set the height of the image to the provided width without using additional props

## Usage

```js
import React, { Component } from 'react';
import ImageAutoHeight from 'react-native-image-auto-height';

export default class Demo extends Component {
  render() {
    return (
      <>
        <ImageAutoHeight
          width={styles.image}
          source={require('./image.png')}
        />

        <ImageAutoHeight
          style={styles.image}
          source={{uri: 'http://placehold.it/350x150'}}
        />

      </>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 'auto',
        resizeMode: 'contain'
    }
});
```
