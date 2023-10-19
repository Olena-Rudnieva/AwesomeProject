import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import Camera from '../assets/svg/camera.svg';
import Trash from '../assets/svg/trash.svg';
const photo1 = require('../assets/images/image1.jpg');

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handlePhotoChange = () => setPhoto(!photo);
  const onSubmitForm = () => {
    if (!photo || !title || !location)
      return console.warn('Завантажте фото та введіть дані !');
    console.log({ photo, title, location });
    setPhoto(false);
    setTitle('');
    setLocation('');
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const deletePost = () => {
    setPhoto(false);
    setTitle('');
    setLocation('');
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View
        style={{
          ...styles.container,
          justifyContent: isShowKeyboard ? 'center' : 'flex-start',
        }}
      >
        <ScrollView style={styles.wrapper}>
          <View style={styles.photo}>
            {photo && (
              <Image
                source={photo1}
                style={{
                  position: 'absolute',
                }}
              />
            )}
            <TouchableOpacity onPress={handlePhotoChange}>
              <View
                style={{
                  ...styles.changePhoto,
                  backgroundColor: photo
                    ? 'rgba(255, 255, 255, 0.3)'
                    : '#FFFFFF',
                }}
              >
                <Camera
                  width={24}
                  height={24}
                  fill={photo ? '#FFF' : '#BDBDBD'}
                  stroke={'transparent'}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.photoText}>
            {photo ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>

          <View style={styles.form}>
            <TextInput
              style={{ ...styles.input, marginBottom: 16 }}
              placeholder="Назва..."
              placeholderTextColor={'#BDBDBD'}
              value={title}
              onChangeText={setTitle}
              onFocus={() => setIsShowKeyboard('true')}
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              placeholderTextColor={'#BDBDBD'}
              value={location}
              onChangeText={setLocation}
              onFocus={() => setIsShowKeyboard('true')}
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor:
                photo && title && location ? '#FF6C00' : '#F6F6F6',
            }}
            activeOpacity={0.8}
            onPress={onSubmitForm}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: photo && title && location ? '#FFFFFF' : '#BDBDBD',
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={deletePost}
            style={styles.deleteBtn}
            activeOpacity={0.8}
          >
            <Trash size={24} fill="#BDBDBD" stroke="#BDBDBD" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingBottom: 34,
  },
  wrapper: {
    width: 343,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  photo: {
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: 343,
    height: 240,
    marginBottom: 8,
    position: 'relative',
  },
  changePhoto: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 10,
    top: 90,
    left: 141,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 48,
  },
  form: {
    marginBottom: 32,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    width: '100%',
    height: 50,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 51,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 111,
    textAlign: 'center',
    marginBottom: 120,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  deleteBtn: {
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    width: 70,
    height: 40,
    marginBottom: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
