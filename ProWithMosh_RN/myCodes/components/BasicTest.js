import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from '/home/forhad/ReactNative/ProWithMosh_RN/myCodes/components/configs/StyleSheet.js';
import BasicTest2, {callableFunc} from '../components/BasicTest2.js';

const BasicTest = () => {
  var l = 20;

  function transactionFunc(p) {
    callableFunc(p);
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>This is text</Text>
      {transactionFunc(l)}
    </View>
  );
};

export default BasicTest;
