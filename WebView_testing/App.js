import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text>WebView Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
})
export default App;