import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import Date1Screen from './Date1Screen';

const ShagotomScreen = ({navigation, route}) => {
  const [testData, setTestData] = useState('');
  useEffect(() => {
    if (route.params?.backData) {
      //code goes here
    }
  }, [route.params?.backData]);
  return (
    <SafeAreaView style={[styles.container]}>
      <TextInput
        singleLine
        value={testData}
        placeholder="Enter text"
        onChangeText={setTestData}
      />
      <Text style={{margin: 10}}>This is ShagotomScreen</Text>
      <Text style={{margin: 10}}>BackData: {route.params?.backData}</Text>

      <View style={{margin: 10}}>
        <Button
          title="Next"
          onPress={() =>
            navigation.navigate('Date1Screen', {
              id: 1,
              data: 'Hey I m from ShagotomScreen',
              testData: testData,
            })
          }
        />
      </View>

      <Button
        title="Update Header"
        onPress={() => navigation.setOptions({title: 'Updated Header'})}
      />
    </SafeAreaView>
  );
};

export default ShagotomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
