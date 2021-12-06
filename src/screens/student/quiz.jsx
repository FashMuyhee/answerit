import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  HStack,
  Circle,
  Button,
  Pressable,
  useToast,
} from 'native-base';
import {ScreenWrapper} from '../../components';
import QuizService from '../../services/Quiz';
import {AuthContent} from '../../context/AuthContext';

const Option = ({onPress, option, index, selected}) => {
  const letter = n => String.fromCharCode(97 + n);

  return (
    <Pressable onPress={() => onPress(true)}>
      <HStack
        minH="50px"
        w="full"
        bg={selected ? 'main' : 'white'}
        shadow={selected ? 9 : 0}
        my="10px"
        p="10px"
        rounded="lg"
        space="4">
        <Circle
          bg={selected ? 'main' : 'white'}
          size={'xs'}
          borderWidth={1.5}
          borderColor={selected ? 'white' : 'main'}>
          <Text
            color={selected ? 'white' : 'main'}
            textTransform={'uppercase'}
            fontWeight="bold"
            fontSize="17px">
            {letter(index)}
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
    </Pressable>
  );
};
const Quiz = ({navigation, route}) => {
  const {quiz, id} = route.params;
  const [quizQuestions, setQuizQuestions] = useState({});
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [quizId, setQuizId] = useState('');
  const {user} = useContext(AuthContent);

  const toast = useToast();

  const getQuiz = async () => {
    const res = await QuizService.fetchQuizDetail(id);
    if (res.status) {
      setQuizQuestions(res.data.quiz);
      setQuizId(res.data.id);
      const quizzes = res.data.quiz;
      const correct = quizzes.map(item => {
        return item.answer;
      });
      setAnswers(correct);
    }
  };

  const handleSelectAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleNext = (next = true) => {
    if (selectedOption.length < 1) {
      toast.show({
        title: 'Select an Option To Continue',
        placement: 'bottom',
      });
      return;
    }

    const myAns = [...selectedAnswers];
    myAns.push(selectedOption);
    setSelectedAnswers(myAns);
    setSelectedOption('');
    if (next) {
      setIndex(index => index + 1);
      return;
    }
  };

  const handleSubmit = async () => {
    handleNext(false);
    const correctAns = [...answers];
    const myAns = [...selectedAnswers,selectedOption];
    let score = 0;
    for (let index = 0; index < correctAns.length; index++) {
      const x = correctAns[index]
      const y = myAns[index];
      if (x === y) {
        score++;
      }
    }

    const res = await QuizService.submitScore({
      quizId,
      score: `${score}/${correctAns.length}`,
      quizTitle: quiz,
      matricNo: user.matric_no,
    });
    if (res.status) {
      toast.show({
        title: res.msg,
        placement: 'bottom',
      });
      navigation.goBack();
    }
    // send score to firebase
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
        {quizQuestions[index]?.options?.map((item, key) => (
          <Option
            key={key}
            option={item}
            index={key}
            selected={selectedOption === item ? true : false}
            onPress={state => handleSelectAnswer(item)}
          />
        ))}
      </View>
      <Button
        alignItems="center"
        onPress={index + 1 == quizQuestions?.length ? handleSubmit : handleNext}
        h="50px"
        my="4"
        colorScheme={index + 1 == quizQuestions?.length ? 'success' : 'orange'}
        _text={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 2,
          color: 'white',
        }}>
        {index + 1 == quizQuestions?.length ? 'Submit' : 'Next'}
      </Button>
    </ScreenWrapper>
  );
};

export default Quiz;
