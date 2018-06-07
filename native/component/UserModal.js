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
          <Title>Account</Title>
          </Body>
          <Right>
            <Button light transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: 'black', border: 'none'}}>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <Button block transparent light><Text style={{color: 'black'}}>Profiles</Text></Button>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
export default UserScreen;
