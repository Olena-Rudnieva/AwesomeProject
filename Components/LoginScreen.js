import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Plus from '../assets/svg/plus.svg';
const background = require('../assets/images/background.png');

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Увійти</Text>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          > */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text>Показати</Text>
            </TouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                width: '100%',
                height: 51,
                backgroundColor: '#FF6C00',
                borderRadius: 100,
                color: 'white',
                paddingVertical: 16,
                paddingHorizontal: 111,
                textAlign: 'center',
                fontSize: 16,
              }}
            >
              Зареєстуватися
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
    position: 'relative',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 78,
    height: 489,
  },
  title: {
    marginBottom: 33,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    color: '#212121',
  },
  form: {
    width: 343,
    marginBottom: 43,
    position: 'relative',
    gap: 16,
  },
  input: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#212121',
  },
  button: {
    color: '#1B4371',
    position: 'absolute',
    bottom: 31,
    right: 16,
    fontSize: 16,
  },
  text: {
    color: '#1B4371',
    textDecorationLine: 'none',
    fontSize: 16,
  },
});
