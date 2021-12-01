import React,{useContext} from 'react';
import {Heading, ScrollView, HStack, Text, Fab} from 'native-base';
import {ScreenWrapper, QuizCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContent } from '../../context/AuthContext';

const HeaderTitle = ({title, route}) => {
  const {navigate} = useNavigation();

  return (
    <HStack
      alignItems="center"
      space="4"
      justifyContent={'space-between'}
      mt="4">
      <Heading color="main">{title}</Heading>
    </HStack>
  );
};

const Home = ({navigation}) => {
  const {user} = useContext(AuthContent);

  return (
    <ScreenWrapper noPad>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <Heading my="4" textAlign={'center'}>
          Welcome {user.lname} 👋👋👋
        </Heading>
        <HeaderTitle title={'Your Quiz'} route="results" />
        <QuizCard
          title="Mathematics Qicz"
          onPress={() =>
            navigation.navigate('result', {quiz: 'athematics Qicz'})
          }
        />
        <QuizCard
          title="Mathematics Qicz"
          onPress={() =>
            navigation.navigate('result', {quiz: 'Mathematics Qicz'})
          }
        />
        <QuizCard
          title="Mathematics Qicz"
          onPress={() =>
            navigation.navigate('result', {quiz: 'Mathematics Qicz'})
          }
        />
      </ScrollView>
    </ScreenWrapper>
  );
};
export default Home;
