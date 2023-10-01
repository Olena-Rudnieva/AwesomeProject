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
} from 'react-native';
import Plus from '../assets/svg/plus.svg';
import Cross from '../assets/svg/cross.svg';
const background = require('../assets/images/background.png');
const avatarPhoto = require('../assets/images/avatar-photo.png');

export const RegistationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({
    userName: false,
    email: false,
    password: false,
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-190}
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
              marginBottom: isShowKeyboard ? 100 : 0,
            }}
          >
            <View style={styles.avatar}>
              <View style={styles.avatarIcon}>
                <Plus width={13} height={13} fill={'#FF6C00'} />
              </View>
            </View>

            {/* With avatar photo  */}
            {/* <ImageBackground source={avatarPhoto} style={styles.avatar}>
            <View style={styles.avatarIconWithPhoto}>
              <Cross width={13} height={13} fill={'#BDBDBD'} />
            </View>
          </ImageBackground> */}

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
                onFocus={() => {
                  setIsShowKeyboard(true),
                    setIsFocused({
                      ...isFocused,
                      userName: true,
                    });
                }}
                onBlur={() => {
                  setIsFocused({
                    ...isFocused,
                    userName: false,
                  });
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocused.email ? '#FFFFFF' : '#F6F6F6',
                  borderColor: isFocused.email ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => {
                  setIsShowKeyboard(true),
                    setIsFocused({
                      ...isFocused,
                      email: true,
                    });
                }}
                onBlur={() => {
                  setIsFocused({
                    ...isFocused,
                    email: false,
                  });
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocused.password ? '#FFFFFF' : '#F6F6F6',
                  borderColor: isFocused.password ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder="Пароль"
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true),
                    setIsFocused({
                      ...isFocused,
                      password: true,
                    });
                }}
                onBlur={() => {
                  setIsFocused({
                    ...isFocused,
                    password: false,
                  });
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TouchableOpacity>
                <Text style={styles.inputPassword}>Показати</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
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
    paddingBottom: 78,
    paddingHorizontal: 16,
    height: 549,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    top: -60,
    position: 'absolute',
    zIndex: 10,
  },
  avatarIcon: {
    borderColor: '#FF6C00',
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: 81,
    left: 107,
    zIndex: 50,
  },
  avatarIconWithPhoto: {
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: 81,
    left: 107,
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
    position: 'relative',
    gap: 16,
    marginBottom: 27,
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
