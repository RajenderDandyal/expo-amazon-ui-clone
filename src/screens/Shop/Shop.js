import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class Shop extends Component {
  state={
    rnsc:""
  }
  render() {
    return (
        <View styles={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign:'center'}}>
            Shop
          </Text>
        </View>
    );
  }
}

export default Shop;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});