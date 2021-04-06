# react-native-image-auto-height
[![npm](https://img.shields.io/npm/v/github-buttons)](https://www.npmjs.com/package/react-native-image-auto-height)

This component provides you with an easy way to automatically set the height of the image to the provided width without using additional props

## Install
To install the module, run the following in the command line:
```bash
npm i react-native-image-auto-height --save
```

## Usage

```js
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ImageAutoHeight from 'react-native-image-auto-height';

export default class Demo extends Component {
  render() {
    return (
      <>
        <ImageAutoHeight
          style={styles.image}
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
