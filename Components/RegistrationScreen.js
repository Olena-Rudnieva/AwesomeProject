import { useState } from 'react';
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
  Image,
} from 'react-native';
import Plus from '../assets/svg/plus.svg';
import Cross from '../assets/svg/cross.svg';
const background = require('../assets/images/background.png');
const avatar = require('../assets/images/avatar-photo.png');

export const RegistationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({
    userName: false,
    email: false,
    password: false,
  });
  const [avatarPhoto, setAvatarPhoto] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmitForm = () => {
    console.log('login:', login);
    console.log('email:', email);
    console.log('password:', password);
    setLogin('');
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

  const handleAvatarChange = () => setAvatarPhoto(!avatarPhoto);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-180}
        style={styles.container}
      >
        <ImageBackground
          source={background}
          style={{
            ...styles.background,
            marginBottom: isShowKeyboard ? -100 : 0,
          }}
        >
          <View
            style={{
              ...styles.wrapper,
              paddingBottom: isShowKeyboard ? 160 : 78,
            }}
          >
            <View style={styles.avatarWrapper}>
              {avatarPhoto && <Image source={avatar} />}

              <TouchableOpacity
                style={{
                  ...styles.avatarIcon,
                  borderColor: avatarPhoto ? '#E8E8E8' : '#FF6C00',
                }}
                onPress={handleAvatarChange}
              >
                {avatarPhoto ? (
                  <Cross width={13} height={13} fill={'#BDBDBD'} />
                ) : (
                  <Plus width={13} height={13} fill={'#FF6C00'} />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.form}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocused.userName ? '#FFFFFF' : '#F6F6F6',
                  borderColor: isFocused.userName ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder="Логін"
                placeholderTextColor={'#BDBDBD'}
                value={login}
                onChangeText={setLogin}
                onFocus={() => {
                  handleFocus('userName');
                }}
                onBlur={() => {
                  handleBlur('userName');
                }}
                onSubmitEditing={handleSubmitEditing}
              />
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
              onPress={onSubmitForm}
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  avatarWrapper: {
    position: 'absolute',
    top: -60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
  },
  avatarIcon: {
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 107,
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 14,
    right: 0,
    zIndex: 50,
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
    height: 182,
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
  },
  buttonText: {
    width: '100%',
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    color: 'white',
    paddingVertical: 16,
    paddingHorizontal: 111,
    textAlign: 'center',
    fontSize: 16,
  },
  text: {
    color: '#1B4371',
    textDecorationLine: 'none',
    fontSize: 16,
  },
});
