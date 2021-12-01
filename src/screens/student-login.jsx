import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {
  Input,
  View,
  Text,
  Heading,
  Button,
  ScrollView,
  Box,
  useToast,
} from 'native-base';
import AuthService from '../services/Auth';
import {ScreenWrapper} from '../components';
import {AuthContent} from '../context/AuthContext';

const StudentLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {setUserRole, setUser} = useContext(AuthContent);
  const toast = useToast();

  const handleRegister = async () => {
    setLoading(true);
    const res = await AuthService.handleSignIn(email, password);
    if (!res?.isError) {
      const user = await AuthService.getStudent();
      setUser(user);
      setUserRole('student');
      setLoading(false);
      return;
    }
    toast.show({title: res.msg, placement: 'bottom'});
    setLoading(false);
  };

  return (
    <ScreenWrapper noPad>
      <ScrollView px="4">
        <Box mt="16" mb="4">
          <Heading size="2xl" textAlign="center" color="main">
            Login To Continue
          </Heading>
        </Box>
        <View>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
            variant="outline"
            keyboardType="email-address"
            fontSize="16px"
            editable={!loading}
          />

          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            variant="outline"
            fontSize="16px"
            editable={!loading}
          />
          <Button
            bg={'main'}
            _pressed={{
              bg: 'main',
            }}
            _loading={{
              bg: 'main',
            }}
            h="50px"
            mt="30px"
            onPress={handleRegister}
            isLoading={loading}
            disabled={loading}>
            {loading ? 'Processing' : 'Register'}
          </Button>
          <Text
            textAlign="center"
            fontSize={15}
            mt="5"
            color="main"
            onPress={() => navigation.navigate('student_reg')}>
            Don't Have an Account ? Register
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default StudentLoginScreen;
const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    height: 50,
  },
});
