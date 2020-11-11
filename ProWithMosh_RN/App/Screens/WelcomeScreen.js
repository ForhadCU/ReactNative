import React from 'react';
import {Image, ImageBackground, StyleSheet, View, Text} from 'react-native';
import colors from '/home/forhad/ReactNative/ProWithMosh_RN/App/Configs/Colors.js'
// import GetCurrentDate from '/home/forhad/ReactNative/ProWithMosh_RN/App/Screens/GetCurrentDate.js'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('/home/forhad/ReactNative/ProWithMosh_RN/App/Assets/portrait_img.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('/home/forhad/ReactNative/ProWithMosh_RN/App/Assets/icons8-doctors-bag-100.png')}></Image>
        <Text>This is Text under Logo</Text>
      </View>
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
