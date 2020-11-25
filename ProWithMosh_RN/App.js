import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '/home/forhad/ReactNative/ProWithMosh_RN/myCodes/components/configs/StyleSheet.js';

const App = () => {
  function onclick() {
    try {
      fetch('https://webhook.site/80fe2e69-2aa0-4051-a61b-62228b8c5ecc', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Forhad',
          lastName: 'Kashem',
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          onclick();
        }}>
        <Text>This is testing</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
