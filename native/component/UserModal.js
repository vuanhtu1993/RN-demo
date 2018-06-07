import React from 'react';
import {StyleSheet, View} from 'react-native'
import {Body, Button, Container, Header, Icon, Left, Right, Text, Title} from "native-base";


class UserScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header
          style={{backgroundColor: 'white'}}
          androidStatusBarColor="black">
          <Body>
          <Title>User</Title>
          </Body>
          <Right>
            <Button light transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: 'black', border: 'none'}}>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <Text>Modal Screen</Text>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UserScreen;
