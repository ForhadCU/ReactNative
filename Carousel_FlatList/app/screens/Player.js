import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import songs from '../components/data';

const {width} = Dimensions.get("window");

const Player = () => {
  const renderItem = ({item}) => {
    return (
      <View style={[styles.imageContainer]}>
        <Image style={[styles.image]} source={item.image} />
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  imageContainer:{
      width: width,
      alignItems: 'center'
  }
});
