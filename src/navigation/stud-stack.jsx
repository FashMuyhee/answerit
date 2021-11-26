import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/student/home';
import {useTheme} from 'native-base';
import Result from '../screens/student/results';
import Quiz from '../screens/student/quiz';

const Stack = createStackNavigator();

const StudentStackNavigator = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        headerShown: true,
        presentation: 'card',
        headerTitleStyle: {
          fontFamily: 'Nunito-SemiBold',
          textTransform: 'capitalize',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.main,
        },
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="results"
        component={Result}
        options={{
          headerTitle: 'Quiz Results',
        }}
      />
      <Stack.Screen name="quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default StudentStackNavigator;
