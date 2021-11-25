import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/student/home';
import {useTheme} from 'native-base';
const Stack = createStackNavigator();

const StudentStackNavigator = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
          headerTitle: 'Welcome',
        }}
      />
    </Stack.Navigator>
  );
};

export default StudentStackNavigator;
