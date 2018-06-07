import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Icon} from 'native-base';
import {createStackNavigator} from "react-navigation";

class IPSAScreen extends React.Component {
  static navigationOptions = {
    title: 'IPSA',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>IPSA</Text>
      </View>
    );
  }
}
class CauseScreen extends React.Component {
  static navigationOptions = {
    title: 'Cause',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Cause</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const IPSAStack = createStackNavigator(
  {
    IPSA: IPSAScreen,
    Cause: CauseScreen,
  },
  {
    initialRouteName: 'IPSA',
  }
);

export default IPSAStack;
