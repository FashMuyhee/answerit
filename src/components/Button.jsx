import React from 'react';
import {Button as NbBUtton} from 'native-base';

const Button = ({isLoading, title, onPress, disabled}) => {
  return (
    <NbBUtton
      isDisabled={isLoading || disabled}
      isLoading={isLoading}
      isLoadingText={loadingText}
      variant={type}
      onPress={onPress}
      size="md"
      rounded={0}
      alignItems="center"
      h="60px"
      my="4"
      bg="main"
      _text={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'white',
      }}
>
      {title}
    </NbBUtton>
  );
};

export default Button;
