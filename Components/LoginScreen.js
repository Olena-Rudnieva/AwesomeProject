import { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
const background = require('../assets/images/background.png');

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsShowKeyboard(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmitEditing = () => {
    setIsShowKeyboard(false);
  };

  return (
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
          style={{ ...styles.wrapper, marginBottom: isShowKeyboard ? 45 : 0 }}
        >
          <Text style={styles.title}>Увійти</Text>

          <View style={styles.form}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: isFocused ? '#FFFFFF' : '#F6F6F6',
                borderColor: isFocused ? '#FF6C00' : '#E8E8E8',
              }}
              placeholder="Адреса електронної пошти"
              placeholderTextColor={'#BDBDBD'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onSubmitEditing={handleSubmitEditing}
            />
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: isFocused ? '#FFFFFF' : '#F6F6F6',
                borderColor: isFocused ? '#FF6C00' : '#E8E8E8',
              }}
              placeholder="Пароль"
              placeholderTextColor={'#BDBDBD'}
              secureTextEntry={true}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onSubmitEditing={handleSubmitEditing}
            />
            <TouchableOpacity>
              <Text style={styles.inputPassword}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
    paddingBottom: 144,
    paddingHorizontal: 16,
    height: 489,
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
