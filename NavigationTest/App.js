import * as React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  ToolbarAndroidComponent,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import ShagotomScreen from './app/screens/ShagotomScreen';
import Date1Screen from './app/screens/Date1Screen';
import Date2Screen from './app/screens/Date2Screen';
import EknojoreScreen from './app/screens/EknojoreScreen';
import MainScreen from './app/screens/MainScreen';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator mode="modal" initialRouteName="ShagotomScreen" >
        <Stack.Screen name="ShagotomScreen" component={ShagotomScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Date1Screen" component={Date1Screen} options={{headerShown: false}}/>
        <Stack.Screen name="Date2Screen" component={Date2Screen} options={{headerShown: false}}/>
        <Stack.Screen name="EknojoreScreen" component={EknojoreScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerTitle: 'Main', headerLeft: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


/* import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; */


/* function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="DetailsScreen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is DetailsScreen</Text>
      <Button
        title="Details screen again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Details screen push"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Home"
        onPress={() => navigation.popToTop('Home')}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
 */