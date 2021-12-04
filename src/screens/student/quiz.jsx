import React, {useEffect, useState} from 'react';
import {View, Text, HStack, Circle, Button} from 'native-base';
import {ScreenWrapper} from '../../components';
import QuizService from '../../services/Quiz';

const Option = ({onPress, option, index, selected}) => {
  return (
    <HStack
      minH="50px"
      w="full"
      bg={selected ? 'main' : 'white'}
      shadow={selected ? 9 : 0}
      my="10px"
      p="5px"
      rounded="lg"
      space="4">
      <Circle
        bg={selected ? 'main' : 'white'}
        size={'sm'}
        borderWidth={1.5}
        borderColor={selected ? 'white' : 'main'}>
        <Text
          color={selected ? 'white' : 'main'}
          textTransform={'uppercase'}
          fontWeight="bold"
          fontSize="17px">
          a
        </Text>
      </Circle>
      <Text
        color={selected ? 'white' : 'main'}
        fontWeight="normal"
        flexWrap="wrap"
        fontSize="13px"
        alignSelf={'center'}>
        {option}
      </Text>
    </HStack>
  );
};
const Quiz = ({navigation, route}) => {
  const {quiz, id} = route.params;
  const [quizQuestions, setQuizQuestions] = useState({});
  const [index, setIndex] = useState(0);
console.log(quizQuestions)
  // const [currentQuiz,setQuiz] =useState({})
  // const [currentQuiz,setQuiz] =useState({})

  const getQuiz = async () => {
    const res = await QuizService.fetchQuizDetail(id);
    if (res.status) {
      setQuizQuestions(res.data.quiz);
    }
  };

  /**
   *
   *handle next question
   */
  const handleNext = () => {
    // if (!selected) {
    //   toast.error("Select an Option To Continue");
    //   return;
    // }

    setIndex(index => index + 1);
  };
  useEffect(() => {
    navigation.setOptions({
      title: quiz,
    });
    getQuiz();
  }, [navigation]);

  return (
    <ScreenWrapper>
      <View
        alignItems={'center'}
        w="full"
        minH="200px"
        bg="white"
        shadow={'5'}
        mt="4"
        p="4">
        <Text color="orange.500" fontWeight="semibold" fontSize={20}>
          Question {`${index + 1}/${quizQuestions?.length}`}
        </Text>
        <Text color="black" fontSize={15} mt="5px">
          {quizQuestions[index]?.question}
        </Text>
      </View>
      <View mt="4">
        {quizQuestions[index]?.options?.map((item,key)=><Option selected key={key} option={item}/>)}
      </View>
      <Button
        alignItems="center"
        onPress={handleNext}
        h="50px"
        my="4"
        colorScheme="orange"
        _text={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 2,
          color: 'white',
        }}>
        Next
      </Button>
    </ScreenWrapper>
  );
};

export default Quiz;
