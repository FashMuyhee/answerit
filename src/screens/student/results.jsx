import React from 'react';
import {FlatList} from 'native-base';
import {ScreenWrapper, QuizCard} from '../../components';

const Result = () => {
  return (
    <ScreenWrapper noPad>
      <FlatList
        data={[...Array(10)]}
        renderItem={({}) => <QuizCard title="Mathematics Qicz" />}
        keyExtractor={(item, key) => key.toString()}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsHorizontalScrollIndicator
      />
    </ScreenWrapper>
  );
};

export default Result;
