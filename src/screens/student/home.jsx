import React from 'react';
import {Heading, ScrollView, HStack, Text} from 'native-base';
import {ScreenWrapper, QuizCard} from '../../components';
import {useNavigation} from '@react-navigation/native';

const HeaderTitle = ({title, route}) => {
  const {navigate} = useNavigation();

  return (
    <HStack
      alignItems="center"
      space="4"
      justifyContent={'space-between'}
      mt="4">
      <Heading color="main">{title}</Heading>
      <Text color="main" onPress={() => navigate(route)}>
        View More
      </Text>
    </HStack>
  );
};

const Home = () => {
  return (
    <ScreenWrapper noPad>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <Heading my="4" textAlign={'center'}>
          Welcome James 👋👋👋
        </Heading>
        <HeaderTitle title={'Recent Quiz'} route="results" />
        <QuizCard title="Mathematics Qicz" disable />
        <QuizCard title="Mathematics Qicz" disable />
        <QuizCard title="Mathematics Qicz" disable />
        <HeaderTitle title={'Live Quiz'} />
        <QuizCard title="Mathematics Qicz" />
        <QuizCard title="Mathematics Qicz" />
        <QuizCard title="Mathematics Qicz" />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;
