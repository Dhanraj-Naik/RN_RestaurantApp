import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = ({
  params,
}) => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        title: 'Business Search',
      }}
    >
      <Stack.Screen
        name={'searchScreen'}
        component={SearchScreen}
      />
      <Stack.Screen
        name={'detailsScreen'}
        component={DetailsScreen}
      />
      <Stack.Screen
        name={'homeScreen'}
        component={HomeScreen}
      />
      <Stack.Screen
        name={'resultsShowScreen'}
        component={ResultsShowScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
