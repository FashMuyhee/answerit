import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useTheme} from 'native-base';
import StudentReg from '../screens/student-register';
import StudentLoginScreen from '../screens/student-login';
import LecturerLogin from '../screens/lect-login';
import LecturerRegisterScreen from '../screens/lect-register';
import OnboardingScreen from '../screens/onboarding';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        headerShown: false,
        presentation: 'card',
      }}>
      <Stack.Screen name="welcome" component={OnboardingScreen} />
      <Stack.Screen name="student_reg" component={StudentReg} />
      <Stack.Screen name="student_login" component={StudentLoginScreen} />
      <Stack.Screen name="lect_login" component={LecturerLogin} />
      <Stack.Screen name="lect_reg" component={LecturerRegisterScreen} />

    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
