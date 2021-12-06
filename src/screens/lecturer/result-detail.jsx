import React, {useEffect, useState} from 'react';
import {View, Text, Box, VStack, Heading, HStack, FlatList} from 'native-base';
import QuizService from '../../services/Quiz';
import moment from 'moment';

const ResultDetails = ({navigation, route}) => {
  const {quiz, id} = route.params;
  const [quizzes, setQuizzes] = useState([]);

  const getMyQuiz = async () => {
    const res = await QuizService.resultPerQuiz(id);
    setQuizzes(res.data);
  };

  useEffect(() => {
    navigation.setOptions({
      title: quiz + ' Result',
    });
    getMyQuiz();
  }, [quiz]);

  return (
    <View px="4">
      <FlatList
        data={quizzes}
        renderItem={({item}) => (
          <Box
            rounded="md"
            h="24"
            w="full"
            bg="white"
            my="7px"
            p="4"
            flexDirection={'row'}
            shadow={'9'}
            alignItems="center"
            space="4"
            justifyContent={'space-between'}>
            <View
              bg="orange.100"
              h="full"
              w="20%"
              rounded="md"
              alignItems="center"
              flexDirection="column"
              justifyContent="center">
              <Text
                color="orange.600"
                fontSize="28px"
                textAlign="center"
                fontWeight="bold"
                textTransform={'uppercase'}>
                {item.key}
              </Text>
            </View>
            <VStack w="75%" h="4/5">
              <Heading fontSize="18px" color="darkBlue.800">
                {item.studentName}
              </Heading>
              <Text>{item.matricNo}</Text>
              <HStack space="2">
                <Text>{item.score}</Text>
                <Text color="textMute" fontStyle={'italic'}>
                  {moment(item?.createdAt).fromNow()}
                </Text>
              </HStack>
            </VStack>
          </Box>
        )}
      />
    </View>
  );
};

export default ResultDetails;
