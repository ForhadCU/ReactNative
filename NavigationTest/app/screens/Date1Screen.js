import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, TextInput} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';

const Date1Screen = ({navigation, route}) => {
  const {id, data, testData} = route.params;
  var idString = JSON.stringify(id);
  var dataString = JSON.stringify(data);
  const [post, setPost] = useState(JSON.stringify(testData));
  

  return (
    <SafeAreaView style={[styles.container]}>
      <TextInput
        singleline
        value={post}
        placeholder="What's your mind"
        style={{height: 50}}
        onChangeText={setPost}
      />
      <Text style={{margin: 10}}>This is Date1Screen</Text>
      <Text style={{margin: 10}}>id1: {idString}</Text>
      <Text style={{margin: 10}}>data1: {post}</Text>
      <View style={{margin: 10}}>
        <Button
          title="Next"
          onPress={() =>
            navigation.navigate('Date2Screen', {
              id: 2,
              data: 'I am  from Date1Screen',
            })
          }
        />
      </View>

      {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
      <Button
        title="ShagotomScreen"
        onPress={() => navigation.navigate('ShagotomScreen', {backData: post})}
      />
    </SafeAreaView>
  );
};

export default Date1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
