import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

var m;
const DefaultFunc = () => {

  //   export const Age = () => {
  //     return '21';
  //   };
  return (
    <View>
      <Text>{m}</Text>
    </View>
  );
};
export default DefaultFunc;

export function callableFunc(l) {
  m =l
}

export const userName = () => {
  return 'Forhad';
};
export const Age = () => {
  return '21';
};
export const note = () => {
  return "it's done";
};
