import { useState } from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import Plus from '../assets/svg/plus.svg';
const background = require('../assets/images/background.png');

export const RegistationScreen = () => {
  // console.log('where is Debugger???');
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    // >
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: 'white',
            width: '100%',
            paddingTop: 92,
            paddingHorizontal: 16,
            paddingBottom: 78,
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#F6F6F6',
              borderRadius: 16,
              top: -60,
              position: 'absolute',
              zIndex: 10,
            }}
          >
            <View
              style={{
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
              }}
            >
              <Plus width={13} height={13} fill={'#FF6C00'} />
            </View>
          </View>
          <Text
            style={{
              marginBottom: 33,
              fontFamily: 'Roboto-Medium',
              fontSize: 30,
              letterSpacing: 0.3,
            }}
          >
            Реєстрація
          </Text>

          <View
            style={{
              width: 343,
              marginBottom: 43,
              position: 'relative',
              gap: 16,
            }}
          >
            <TextInput
              placeholder="Логін"
              style={{
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
              }}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              style={{
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
              }}
            />
            <TextInput
              placeholder="Пароль"
              style={{
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
              }}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text
                style={{
                  color: '#1B4371',
                  position: 'absolute',
                  bottom: 31,
                  right: 16,
                  fontSize: 16,
                }}
              >
                Показати
              </Text>
            </TouchableOpacity>
          </View>

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
            <Text
              style={{
                color: '#1B4371',
                textDecorationLine: 'none',
                fontSize: 16,
              }}
            >
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    // </KeyboardAvoidingView>
  );
};
