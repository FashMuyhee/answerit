import React, {useEffect} from 'react';
import {View, Text, HStack, Circle, Button} from 'native-base';
import {ScreenWrapper} from '../../components';

const Option = ({onPress, option, index, selected}) => {
  return (
    <HStack
      h="80px"
      w="full"
      bg={selected ? 'main' : 'white'}
      shadow={selected ? 9 : 0}
      my="10px"
      p="4"
      rounded="lg"
      space="4">
      <Circle
        bg={selected ? 'main' : 'white'}
        size={50}
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
        fontSize="13px"
        alignSelf={'center'}>
        djfbdejfbfjgbfjgbjfgbjfgb
      </Text>
    </HStack>
  );
};
const Quiz = ({navigation, route}) => {
  const {quiz} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: quiz,
    });
  }, [quiz]);

  return (
    <ScreenWrapper>
      <View
        alignItems={'center'}
        w="full"
        h="1/5"
        bg="white"
        shadow={'5'}
        mt="4"
        p="4">
        <Text color="orange.500" fontWeight="semibold" fontSize={20}>
          Question 3/10
        </Text>
        <Text color="black" fontSize={15} mt="5px">
          The Italian automaker Lamborghini uses what animal as its logo?
        </Text>
      </View>
      <View mt="16">
        <Option selected />
        <Option />
        <Option />
        <Option />
      </View>
      <Button
        alignItems="center"
        h="50px"
        my="4"
        bg="orange.400"
        _pressed={{
          bg: 'orange.300',
        }}
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
