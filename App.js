import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import {createDrawerNavigator, createStackNavigator,TabBarBottom, createBottomTabNavigator} from "react-navigation";
import Home from "./src/screens/Home/Home";
import Notifications from "./src/screens/Notifications/Notifications";
import Product from "./src/screens/Product/Product";
import { ScrollView, Image, View} from "react-native";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {Container, Content, Body} from 'native-base';

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView  forceInset={{ top: 'always', horizontal: 'never' }}>
        <Container>
          <Content>
            <View style={{justifyContent:'center', alignItems:"center", width:'100%', height:80}}>
              <Image source={require('./assets/guitar.png')} style={{width:50, height:50}}/>
            </View>
            <DrawerItems {...props} />
          </Content>
        </Container>
      </SafeAreaView>
    </ScrollView>
);
const NotificationsStack = createStackNavigator({
  NotificationsStack:Notifications
});
const HomeStack = createStackNavigator({
  HomeStack:Home,
  Product:Product
});
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
  Notifications: NotificationsStack
},{
  initialRouteName :"Home",
  contentComponent :CustomDrawerContentComponent,

});

export default class App extends React.Component {
  render() {
    return (
        <AppDrawerNavigator/>
    );
  }
}