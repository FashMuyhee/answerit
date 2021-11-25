import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import colors from '@utils/colors';
import Home from '../screens/student/home';

const Stack = createStackNavigator();

const StudentStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: true,
        presentation: 'card',
        headerTitleStyle: {
          color: colors.secondary,
          fontFamily: 'Raleway-Bold',
          textTransform: 'capitalize',
        },
        headerTitleAlign: 'center',
        headerTintColor: colors.primary,
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: 'Welcome',
        }}
      />
    </Stack.Navigator>
  );
};

export default StudentStackNavigator;
