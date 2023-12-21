import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { loginDB } from '../../redux/auth/authOperations';
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
import { useDispatch } from 'react-redux';

const background = require('../../assets/images/background.png');

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmitForm = () => {
    if (!email || !password) return console.warn('Введіть дані!');

    dispatch(loginDB({ email, password }));
    // navigation.navigate('Home', { user: { email, password } });
    setEmail('');
    setPassword('');
  };

  // const obj = {
  //   _tokenResponse: {
  //     displayName: 'Test10',
  //     email: 'test10@gmail.com',
  //     expiresIn: '3600',
  //     idToken:
  //       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNi0Mjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVGVzdDEwIiwicGljdHVyZSI6ImZpbGU6Ly8vZGF0YS91c2VyLzAvaG9zdC5leHAuZXhwb25lbnQvY2FjaGUvRXhwZXJpZW5jZURhdGEvJTI1NDBhbm9ueW1vdXMlMjUyRkF3ZXNvbWVQcm9qZWN0LTU5NDY5YzVmLTc1MTQtNDI4Zi05NzBlLWI3MDI1YmQ5NjM3Zi9JbWFnZVBpY2tlci9mODA0MzBjYy00NDBhLTRhNGYtYWZjMy03ZDRiZTY3NmFkZTUuanBlZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9hd2Vzb21lLXByb2plY3QtNDAzNDExIiwiYXVkIjoiYXdlc29tZS1wcm9qZWN0LTQwMzQxMSIsImF1dGhfdGltZSI6MTcwMzE3ODQ0MCwidXNlcl9pZCI6IkpFOFh2czhDVVpaZG5BQ0hYemdGNWh1QnNadjIiLCJzdWIiOiJKRThYdnM4Q1VaWmRuQUNIWHpnRjVodUJzWnYyIiwiaWF0IjoxNzAzMTc4NDQwLCJleHAiOjE3MDMxODIwNDAsImVtYWlsIjoidGVzdDEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0MTBAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.orBKpHTG5F_FUGrx-YEwIVZRdAvHlLac6ItkJGKTTY5lKHH9bmvKxkrAIfz1gfy3vsiHVBSBPE_SNSGF16Tz_kmOLdIQ6C1ZIiX6aqmrSIfueMGykivZ19evgzp07HL7zbYnEjKKf3a39crsYEShQNvrvgqfHDcYl33N04u7_IYgtfnZkpxQzszABhvUq2XobA8hxUZ3WKeBE6psEkFEqdmekRP_Ijpohba2F3Rsp_pF43JMaCtjEvOn1RQXFNiF9-ybmGQyRHgk8s4hpKqYOPJXGldWcuiPCyrueHGATddbveV-vQYUXJTQz01vM5o6GCoGzIOWswoYlcvTt1c-tA',
  //     kind: 'identitytoolkit#VerifyPasswordResponse',
  //     localId: 'JE8Xvs8CUZZdnACHXzgF5huBsZv2',
  //     profilePicture:
  //       'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-59469c5f-7514-428f-970e-b7025bd9637f/ImagePicker/f80430cc-440a-4a4f-afc3-7d4be676ade5.jpeg',
  //     refreshToken:
  //       'AMf-vBzbkVCInzrXhmkBlj4gopsSS4LJIx_cC-TP5BFpcU0ntDpvaIuMJEaQcTh0mNHn0CesFU6wni2nTvNH8ed-_Zr4SH90KtMU3AmnIzLjvPkprlkwFtc_KR7NWRXlFkyHYtAQ7mcbJ5QCza-F7as5Zg_mhVmJJ4o22x7azKXC6hQvTPxh6fdZ-g-RHZnKblGG6ba1mQVi34K3SLOtxN4U0U_GvWMC6LDigAwQ3l1dNC7_9LbpnAk',
  //     registered: true,
  //   },
  //   operationType: 'signIn',
  //   providerId: null,
  //   user: {
  //     _redirectEventId: undefined,
  //     apiKey: 'AIzaSyDcmfMRmYGuPPa829r_mQf0GKYWi_tn2w0',
  //     appName: '[DEFAULT]',
  //     createdAt: '1703178262332',
  //     displayName: 'Test10',
  //     email: 'test10@gmail.com',
  //     emailVerified: false,
  //     isAnonymous: false,
  //     lastLoginAt: '1703178440888',
  //     phoneNumber: undefined,
  //     photoURL:
  //       'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-59469c5f-7514-428f-970e-b7025bd9637f/ImagePicker/f80430cc-440a-4a4f-afc3-7d4be676ade5.jpeg',
  //     providerData: [Array],
  //     stsTokenManager: [Object],
  //     tenantId: undefined,
  //     uid: 'JE8Xvs8CUZZdnACHXzgF5huBsZv2',
  //   },
  // };

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
