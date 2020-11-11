import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

const Date2Screen = ({navigation, route}) => {
  const {id, data} = route.params;
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={{margin: 10}}>This is Date2Screen</Text>
      <Text>id1: {JSON.stringify(id)}</Text>
      <Text>data1: {JSON.stringify(data)}</Text>
      <View style={{margin: 10}}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('EknojoreScreen')}
        />
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Date2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
