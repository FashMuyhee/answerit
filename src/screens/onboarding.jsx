import React, {useState} from 'react';
import {
  View,
  Text,
  Heading,
  HStack,
  Pressable,
  Center,
  ArrowForwardIcon,
} from 'native-base';
import {ScreenWrapper} from '../components';

const OnboardingScreen = ({navigation}) => {
  return (
    <View py="16" px="8" bg="main" h="full" alignItems={'center'} justifyContent={'center'}>
      <Heading textAlign="center" fontSize="5xl" color="white" mb="8">
        Welcome Back
      </Heading>
      <Pressable onPress={() => navigation.navigate('lect_login')}>
        <HStack
          mt="8"
          bg="white"
          h="70px"
          minW="320px"
          rounded="lg"
          justifyContent={'space-between'}
          space="2"
          alignItems="center"
          px="10px">
          <View>
            <Text textAlign="center" fontSize="20px" color="main">
              Continue as a Lecturer
            </Text>
          </View>
          <Center rounded="lg" h="40px" w="40px" bg="orange.400">
            <ArrowForwardIcon color="white" />
          </Center>
        </HStack>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('student_login')}>
        <HStack
          mt="8"
          bg="white"
          h="70px"
          minW="320px"
          rounded="lg"
          justifyContent={'space-between'}
          space="2"
          alignItems="center"
          px="10px">
          <View>
            <Text
              onPress={() => navigation.navigate('student_login')}
              textAlign="center"
              fontSize="20px"
              color="main">
              Continue as a Student
            </Text>
          </View>
          <Center rounded="lg" h="40px" w="40px" bg="orange.400">
            <ArrowForwardIcon color="white" />
          </Center>
        </HStack>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen;
