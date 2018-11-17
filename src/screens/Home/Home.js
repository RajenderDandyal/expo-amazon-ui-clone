import React, {Component} from 'react';
import { StyleSheet,Text } from "react-native";
import {Container, Content, Header, Right, Button, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import AppTheme from "../../AppTheme"
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: AppTheme.colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
        <StyleProvider  style={getTheme(platform)}>
        <Container>
          <Header>
            <Right>
              <Button primary onPress={()=>this.props.navigation.openDrawer()}>
                <Text>drawer</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            <Button style={styles.button} success onPress={()=>this.props.navigation.push('Product')}>
              <Text style={{color:"white"}}>
                Open Product Page
              </Text>
            </Button>
          </Content>
        </Container>
        </StyleProvider>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    backgroundColor: "red",
  }
});