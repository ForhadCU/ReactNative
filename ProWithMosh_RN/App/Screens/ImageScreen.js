import {Image, StyleSheet} from 'react-native';
import React from 'react';

const ImageScreen = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.background}
      source={require('/home/forhad/ReactNative/ProWithMosh_RN/App/Assets/portrait_img.jpg')}></Image>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
});
export default ImageScreen;
