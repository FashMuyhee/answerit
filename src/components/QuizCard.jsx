import React from 'react';
import {Box, View, Text, VStack, Heading, HStack, useTheme} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuizCard = ({title}) => {
  const {colors} = useTheme();

  return (
    <Box
      rounded="md"
      h="24"
      w="full"
      bg="white"
      my="4"
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
            2 Days
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default QuizCard;
