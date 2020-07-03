import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0

import "@expo/vector-icons"; // 5.2.0

export function Button () {

    
    return (
      <View style={styles.container}>
      <ButtonGroup
        selectedBackgroundColor="pink"
        buttons={['Hello', 'Goodbye']}
        containerStyle={{height: 30}} />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});