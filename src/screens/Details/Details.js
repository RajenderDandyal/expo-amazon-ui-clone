import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class Details extends Component {
  state={
    rnsc:""
  }
  render() {
    return (
        <View styles={styles.container}>
          <Text>
           Details
          </Text>
        </View>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});