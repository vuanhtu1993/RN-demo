import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Icon} from 'native-base';


class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting!</Text>
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
export default SettingScreen;
