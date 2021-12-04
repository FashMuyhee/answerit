import React from 'react';
import {
  Box,
  View,
  Text,
  VStack,
  Heading,
  HStack,
  useTheme,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuizCard = ({title, disable, onPress,date}) => {
  const {colors} = useTheme();

  return (
    <Pressable disabled={disable} onPress={onPress}>
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
            {title.charAt(0)}
          </Text>
        </View>
        <VStack w="75%" h="4/5">
          <Heading fontSize="18px" color="darkBlue.800">
            {title}
          </Heading>
          <HStack space="2">
            <Text>10/10</Text>
            <Icon name="event" size={20} color={colors.purple[400]} />
            <Text color="textMute" fontStyle={'italic'}>
              {date}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default QuizCard;
