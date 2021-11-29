import React, {useState, useEffect} from 'react';
import {
  Heading,
  ScrollView,
  HStack,
  Text,
  Modal,
  Input,
  Button,
  Box,
  FormControl,
  Select,
  CheckIcon,
  VStack,
} from 'native-base';
import {ScreenWrapper} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

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

const CreateQuiz = ({navigation}) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestion] = useState([
    {question: '', options: [], answer: ''},
  ]);
  const [modal, setModal] = useState(true);
  const [duration, setDuration] = useState('0');
  const [durationTime, setDurationTime] = useState('min');

  const handleMoreQuestion = () => {
    const currentQuestions = [...questions];
    currentQuestions.push({
      question: '',
      options: [],
      answer: '',
    });

    setQuestion(currentQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const currentQuestions = [...questions];
    currentQuestions[index].question = value;
    setQuestion(currentQuestions);
  };

  const handleOptionsChange = (index, value) => {
    const currentQuestions = [...questions];
    const options = value.split(',');
    currentQuestions[index].options = options;
    setQuestion(currentQuestions);
  };

  const handleCorrectOptionChange = (index, value) => {
    const currentQuestions = [...questions];
    currentQuestions[index].answer = value;
    setQuestion(currentQuestions);
  };

  const handleSubmit = () => {
    console.log(questions);
  };

  useEffect(() => {}, []);

  return (
    <ScreenWrapper noPad>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <Box
          my="10px"
          borderColor="accent"
          borderWidth={1}
          rounded="sm"
          p="10px">
          <Text color="main" fontWeight="bold" fontSize="15px">
            Quiz Title
          </Text>
          <Text>{quizTitle}</Text>
        </Box>
        {questions.map((item, key) => (
          <Box
            my="10px"
            borderColor="accent"
            borderWidth={1}
            rounded="sm"
            key={key}
            p="10px">
            <FormControl>
              <FormControl.Label>Question {key + 1}</FormControl.Label>
              <Input
                multiline
                placeholder="e.g What is the Tallest building in Africa ?"
                _focus={{borderColor: 'main'}}
                value={item.question}
                onChangeText={text => handleQuestionChange(key, text)}
              />
            </FormControl>
            <FormControl mt="10px">
              <FormControl.Label>Options</FormControl.Label>
              <Text mb="5px" color="gray.500" italic fontSize="xs">
                (Separate Each Options with a comma ",")
              </Text>
              <Input
                multiline
                placeholder="e.g What is the Tallest building in Africa ?"
                _focus={{borderColor: 'main'}}
                value={item.options.join(',')}
                onChangeText={text => handleOptionsChange(key, text)}
              />
            </FormControl>
            <FormControl mt="10px">
              <FormControl.Label>Answer</FormControl.Label>
              <Input
                multiline
                placeholder="e.g What is the Tallest building in Africa ?"
                _focus={{borderColor: 'main'}}
                value={item.answer}
                onChangeText={text => handleCorrectOptionChange(key, text)}
              />
            </FormControl>
          </Box>
        ))}

        <Button
          alignItems="center"
          h="50px"
          my="4"
          bg="main"
          onPress={handleMoreQuestion}
          _pressed={{
            bg: 'main',
          }}
          _text={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white',
          }}>
          Add More
        </Button>
        <Button
          alignItems="center"
          h="50px"
          my="4"
          colorScheme="green"
          onPress={handleSubmit}
          _text={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white',
          }}>
          Submit Quiz
        </Button>
      </ScrollView>
      <Modal isOpen={modal} onClose={() => navigation.goBack()}>
        <Modal.Content>
          <Modal.Header>Quiz Setup</Modal.Header>
          <Modal.Body>
            <FormControl mt="10px">
              <FormControl.Label>Quiz Title</FormControl.Label>
              <Input
                value={quizTitle}
                onChangeText={setQuizTitle}
                placeholder="e.g Intro to Computer Quiz 1"
                mt="4"
                _focus={{borderColor: 'main'}}
              />
            </FormControl>
            <FormControl mt="10px">
              <FormControl.Label>Durations</FormControl.Label>
              <HStack alignItems={'center'} justifyContent="center" space={2}>
                <Input
                  value={duration}
                  onChangeText={setDuration}
                  placeholder="e.g 30"
                  _focus={{borderColor: 'main'}}
                  keyboardType="number-pad"
                />
                <VStack alignItems="center" space={4}>
                  <Select
                    selectedValue={durationTime}
                    minW="200px"
                    h="45px"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: 'orange.400',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={itemValue => setDurationTime(itemValue)}>
                    <Select.Item label="hour" value="hr" />
                    <Select.Item label="minute" value="min" />
                  </Select>
                </VStack>
              </HStack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              bg={quizTitle.length >= 4 ? 'main' : 'gray.300'}
              _pressed={{
                bg: 'main',
              }}
              disabled={quizTitle.length >= 4 ? false : true}
              onPress={() => {
                setModal(false);
              }}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ScreenWrapper>
  );
};

export default CreateQuiz;
