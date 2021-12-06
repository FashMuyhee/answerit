import React, {useEffect, useState} from 'react';
import {FlatList} from 'native-base';
import {ScreenWrapper, QuizCard} from '../../components';
import moment from 'moment';
import QuizService from '../../services/Quiz';

const Result = () => {
  const [scores, setScores] = useState([]);

  const getMyScore = async () => {
    const res = await QuizService.myScoreSheet(res => {
      setScores(res);
    });
  };

  useEffect(() => {
    getMyScore();
  }, []);

  return (
    <ScreenWrapper noPad>
      <FlatList
        data={scores}
        contentContainerStyle={{paddingHorizontal: 20}}
        keyExtractor={(item, key) => key.toString()}
        renderItem={({item}) => (
          <QuizCard
            title={item.quizTitle}
            date={moment(item?.createdAt).fromNow()}
            score={item.score}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default Result;
