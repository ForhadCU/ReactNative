import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={{margin : 10}}>This is MainScreen</Text>
      <Button title="Go to Top Screen" onPress={() => navigation.popToTop()} 
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
