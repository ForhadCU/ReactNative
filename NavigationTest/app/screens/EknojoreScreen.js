import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, Button} from 'react-native';

const EknojoreScreen = ({navigation}) => {
    return (
      <SafeAreaView style={[styles.container]}>
        <Text style={{margin: 10}}>This is EknojoreScreen</Text>
        <View style={{margin: 10}}>
          <Button
            title="Finish"
            onPress={() => navigation.navigate('MainScreen')}
          />
        </View>
      </SafeAreaView>
    );
}

export default EknojoreScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})