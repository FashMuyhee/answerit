import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './auth-stack';
import LecturerStackNavigator from './lect-stack';
import StudentStackNavigator from './stud-stack';
import {useContext} from 'react';
import {AuthContent} from '../context/AuthContext';

const RootNavigator = () => {
  const {userRole, user} = useContext(AuthContent);

  const Navigator = () => {
    if (user) {
      if (userRole == 'student') {
        return <StudentStackNavigator />;
      } else {
        return <LecturerStackNavigator />;
      }
    } else {
      return <AuthStackNavigator />;
    }
  };

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
