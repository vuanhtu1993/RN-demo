import React from 'react';
import {Text, View} from 'react-native';

import {createTabNavigator, StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import IPSAStack from "../component/HomeComponent";
import SettingScreen from "../component/SettingComponent";
import UserScreen from "../component/UserModal";

const TabBar =  TabNavigator(
  {
    Home: { screen: IPSAStack },
    Settings: { screen: SettingScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const Root = StackNavigator(
  {
    Main: IPSAStack,
    UserModal: UserScreen,
  },
  {
    mode: 'modal',
    headerMode: 'node',
  }
);

export default Root;
