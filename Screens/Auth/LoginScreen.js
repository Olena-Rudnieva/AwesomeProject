import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const background = require('../../assets/images/background.png');

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmitForm = () => {
    if (!email || !password) return console.warn('Введіть дані!');
    console.log({ email, password });
    navigation.navigate('Home', { user: { email, password } });
    setEmail('');
    setPassword('');
  };

  const handleFocus = (inputName) => {
    setIsShowKeyboard(true);
    setIsFocused({ [inputName]: true });
  };
  const handleBlur = (inputName) => {
    setIsFocused({ [inputName]: false });
  };
  const handleSubmitEditing = () => setIsShowKeyboard(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-230}
        style={styles.container}
      >
        <ImageBackground
          source={background}
          style={{
            ...styles.background,
            marginBottom: isShowKeyboard ? -45 : 0,
          }}
        >
          <View
            style={{
              ...styles.wrapper,
              paddingBottom: isShowKeyboard ? 155 : 144,
            }}
          >
            <Text style={styles.title}>Увійти</Text>

            <View style={styles.form}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocused.email ? '#FFFFFF' : '#F6F6F6',
                  borderColor: isFocused.email ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={'#BDBDBD'}
                value={email}
                onChangeText={setEmail}
                onFocus={() => {
                  handleFocus('email');
                }}
                onBlur={() => {
                  handleBlur('email');
                }}
                onSubmitEditing={handleSubmitEditing}
              />
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocused.password ? '#FFFFFF' : '#F6F6F6',
                  borderColor: isFocused.password ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder="Пароль"
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
                onFocus={() => {
                  handleFocus('password');
                }}
                onBlur={() => {
                  handleBlur('password');
                }}
                onSubmitEditing={handleSubmitEditing}
              />
              <TouchableOpacity
                disabled={!password}
                onPress={() => setIsPasswordVisible((prevState) => !prevState)}
              >
                <Text style={styles.inputPassword}>
                  {isPasswordVisible ? 'Cховати' : 'Показати'}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handleSubmitForm}
            >
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('RegistrationScreen')}
            >
              <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    lineHeight: 36,
    color: '#212121',
  },
  form: {
    width: 343,
    height: 116,
    position: 'relative',
    gap: 16,
    marginBottom: 43,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  inputPassword: {
    color: '#1B4371',
    position: 'absolute',
    bottom: 31,
    right: 16,
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
    textAlign: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'white',
  },
  text: {
    color: '#1B4371',
    textDecorationLine: 'none',
    fontSize: 16,
  },
});
