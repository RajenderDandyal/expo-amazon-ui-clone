import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Container, Header, Content, Footer, FooterTab, Button, Icon, StyleProvider} from 'native-base'
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import AppTheme from "../../AppTheme";

class Notifications extends Component {
  static navigationOptions = {
    title: 'Notifications',
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
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <Content>
              <View style={{backgroundColor: "#ccc", height: 25}}>

              </View>
            </Content>
            <Footer >
              <FooterTab >
                <Button vertical>
                  <Icon name="apps"/>
                  <Text>Apps</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera"/>
                  <Text>Camera</Text>
                </Button>
                <Button vertical active>
                  <Icon active name="navigate"/>
                  <Text>Navigate</Text>
                </Button>
                <Button vertical>
                  <Icon name="person"/>
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </StyleProvider>

    );
  }
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});