import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from 'native-base';

const ScreenWrapper = ({children, noPad}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        paddingVertical: noPad ? 0 : 10,
        paddingHorizontal: noPad ? 0 : 25,
        flex: 1,
        backgroundColor: colors.bg,
      }}>
      <StatusBar backgroundColor={colors.main} barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
