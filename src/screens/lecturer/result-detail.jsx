import React, {useEffect} from 'react';
import {View, Text, Box, VStack, Heading, HStack} from 'native-base';

const ResultDetails = ({navigation, route}) => {
  const {quiz} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: quiz + ' Result',
    });
  }, [quiz]);
  return (
    <View px="4">
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
            1
          </Text>
        </View>
        <VStack w="75%" h="4/5">
          <Heading fontSize="18px" color="darkBlue.800">
            James Charles
          </Heading>
          <HStack space="2">
            <Text>10/10</Text>
            <Text color="textMute" fontStyle={'italic'}>
              2 Days
            </Text>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};

export default ResultDetails;
