import React, {useContext, useEffect, useState} from 'react';
import {Heading, View, HStack, Text, FlatList} from 'native-base';
import {ScreenWrapper, QuizCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AuthContent} from '../../context/AuthContext';
import QuizService from '../../services/Quiz';
import moment from 'moment';

const HeaderTitle = ({title}) => {
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
  const [quizzes, setQuizzes] = useState([]);

  const getMyQuiz = async () => {
    const res = await QuizService.fetchMyQuizzes();
    if (res.status) {
      setQuizzes(res.data);
    }
  };

  useEffect(() => {
    getMyQuiz();
  }, []);

  return (
    <ScreenWrapper noPad>
      <Heading my="4" textAlign={'center'}>
        Welcome {user.lname} 👋👋👋
      </Heading>
      <View ml="4">
        <HeaderTitle title={'Your Quiz'} route="results" />
      </View>
      <FlatList
        data={quizzes}
        contentContainerStyle={{paddingHorizontal: 20}}
        renderItem={({item}) => (
          <QuizCard
            title={item.quizTitle}
            onPress={() =>
              navigation.navigate('result', {quiz: item.quizTitle, id: item.id})
            }
            date={moment(item?.createdAt).fromNow()}
          />
        )}
      />
    </ScreenWrapper>
  );
};
export default Home;
