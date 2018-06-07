/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from "./native/route/index";

const instructions = Platform.select({
  ios: 'IOS say Hello world',
  android: 'Android say Hello world',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Root/>;
  }
}
