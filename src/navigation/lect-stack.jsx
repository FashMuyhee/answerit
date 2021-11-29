import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/lecturer/home';
import {useTheme} from 'native-base';
import CreateQuiz from '../screens/lecturer/create-quiz';
import ResultDetails from '../screens/lecturer/result-detail';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const LecturerStackNavigator = () => {
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
        options={({navigation}) => ({
          headerTitle: 'Dashboard',
          headerRight: () => (
            <Icon
              name="add"
              size={25}
              color="white"
              style={{marginRight: 20}}
              onPress={() => navigation.navigate('add_quiz')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="add_quiz"
        component={CreateQuiz}
        options={{
          headerTitle: 'Create New Quiz',
        }}
      />
      <Stack.Screen name="result" component={ResultDetails} />
    </Stack.Navigator>
  );
};

export default LecturerStackNavigator;
