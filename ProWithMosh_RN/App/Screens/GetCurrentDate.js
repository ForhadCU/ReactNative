import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);

  const UpdateDateFunc = () => {
    setCurrentDate('Update Date');
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-evenly'}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Current Date Time</Text>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
      </View>
      <View>
        <Text>{currentDate}</Text>
        <Button title="Update Date" onPress={UpdateDateFunc}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});

export default App;
