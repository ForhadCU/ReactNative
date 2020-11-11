import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import BasicTest from './myCodes/components/BasicTest';
import BasicTest2 from './myCodes/components/BasicTest2'

import styles from '/home/forhad/ReactNative/ProWithMosh_RN/myCodes/components/configs/StyleSheet.js';


const App = () => {
    return (
    <SafeAreaView style={[styles.container]}>
      <BasicTest />
      <BasicTest2 />
    </SafeAreaView>
  );
};

export default App;
