import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LecturerStackNavigator from './lect-stack';
import StudentStackNavigator from './stud-stack';

const RootNavigator = () => {
  // const {onBoardingEnd, isLoggedIn} = useSelector(state => state.general);

  const Navigator = () => {
    // return <StudentStackNavigator />;
    return <LecturerStackNavigator/>
  };

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
