import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Button, Container, Content, Header, Icon} from 'native-base'

import {createStackNavigator, StackNavigator} from "react-navigation";

class IPSAScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'IPSA',
    headerRight: (
      <Button light transparent onPress={() => navigation.navigate('UserModal')}>
        <Icon style={{marginTop: 5, color: 'black'}} type="FontAwesome" name="user"/>
      </Button>
    )
  });
  render() {
    return (
        <Container style={{padding: 20}}>
          <Text>IPSA image</Text>
          <Content>
          <FlatList
            data={[
              {key: 'Low Back Pain'},
              {key: 'Allergy'},
              {key: 'Sleep Issue'},
            ]}
            renderItem={({item}) => (
              <Button light block iconLeft large onPress={() => this.props.navigation.navigate('Cause')}>
                <Text> {item.key} </Text>
                <Icon name='angle-right' type="FontAwesome"/>
              </Button>
            )}
          />
          </Content>
        </Container>

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
  }
});

const IPSAStack = StackNavigator(
  {
    IPSA: IPSAScreen,
    Cause: CauseScreen,
  },
  {
    initialRouteName: 'IPSA',
  }
);

export default IPSAStack;
