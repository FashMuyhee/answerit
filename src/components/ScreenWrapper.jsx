import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from 'native-base';

const ScreenWrapper = ({children, pad}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        paddingVertical: pad && 10,
        paddingHorizontal: pad && 25,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={colors.main} barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
