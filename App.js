import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = ({
  params,
}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={'homeScreen'}
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
