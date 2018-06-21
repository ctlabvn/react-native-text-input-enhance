/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RNTextInput from 'react-native-text-input-enhance';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.textInputRef = null;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <RNTextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: 250,
            // height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
            color: '#4C4C4C'
          }}
          placeholder="Write something..."
          placeholderTextColor="rgba(76, 76, 76, 0.54)"
          hasRef={ref => (this.textInputRef = ref)}
          onSubmitEditing={() => this.textInputRef2.focus()}
        />
        <RNTextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: 250,
            // height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
            color: '#4C4C4C'
          }}
          placeholder="Write something..."
          placeholderTextColor="rgba(76, 76, 76, 0.54)"
          hasRef={ref => (this.textInputRef2 = ref)}
        />
        <Text onPress={() => this.textInputRef.clear()} style={styles.welcome}>
          Clear Text
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
