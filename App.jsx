import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import RootNavigator from './src/navigation/root-navigation';

const App = () => {
  const theme = extendTheme({
    colors: {
      bg: 'white',
      main: '#FF1B1B',
      accent: '#FF8D8D',
      bgGrey: '#F6F6F6',
      textMute: '#677994',
      darkGrey: '#494949',
      justGrey: '#8D8D8D',
      lightGrey: '#DADADA',
    },
    config: {
      initialColorMode: 'light',
    },
    components: {
      Text: {
        baseStyle: {
          color: 'darkText',
        },
      },
      Toast: {
        baseStyle: {
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 350,
        },
      },
    },
    fontConfig: {
      nunito: {
        100: {
          normal: 'Nunito-ExtraLight',
          italic: 'Nunito-ExtraLightItalic',
        },
        200: {
          normal: 'Nunito-ExtraLight',
          italic: 'Nunito-ExtraLightItalic',
        },
        300: {
          normal: 'Nunito-Light',
          italic: 'Nunito-LightItalic',
        },
        400: {
          normal: 'Nunito-Regular',
          italic: 'Nunito-Italic',
        },
        500: {
          normal: 'Nunito-Regular',
          italic: 'Nunito-Italic',
        },
        600: {
          normal: 'Nunito-SemiBold',
          italic: 'Nunito-SemiBoldItalic',
        },
        700: {
          normal: 'Nunito-Bold',
          italic: 'Nunito-BoldItalic',
        },
        800: {
          normal: 'Nunito-ExtraBold',
          italic: 'Nunito-ExtraBoldItalic',
        },
        900: {
          normal: 'Nunito-Black',
          italic: 'Nunito-BlackItalic',
        },
      },
    },
    fonts: {
      heading: 'nunito',
      body: 'nunito',
      mono: 'nunito',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator />
    </NativeBaseProvider>
  );
};
export default App;
