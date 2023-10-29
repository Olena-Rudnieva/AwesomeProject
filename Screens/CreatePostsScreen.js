import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Photo from '../assets/svg/camera.svg';
import Trash from '../assets/svg/trash.svg';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
const photo1 = require('../assets/images/image1.jpg');

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  // const [cameraRef, setCameraRef] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();

  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
        <View style={styles.wrapper}>
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}
          >
            <Text>Hello</Text>
          </Camera>

          {/* <View>
            <View style={styles.photo}>
              {photo && (
                <Image
                  source={photo1}
                  style={{
                    position: 'absolute',
                  }}
                />
              )}
              <View style={styles.container2}>
                <Camera style={styles.camera} type={type} ref={setCameraRef}>
                  <View style={styles.photoView}>
                    <TouchableOpacity
                      style={styles.flipContainer}
                      onPress={() => {
                        setType(
                          type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          color: 'white',
                        }}
                      >
                        {' '}
                        Flip{' '}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={async () => {
                        if (cameraRef) {
                          const { uri } = await cameraRef.takePictureAsync();
                          await MediaLibrary.createAssetAsync(uri);
                        }
                      }}
                      onPress={handlePhotoChange}
                    >
                      <View style={styles.takePhotoOut}>
                        <View style={styles.takePhotoInner}></View>
                      </View>

                      <View
                        style={{
                          ...styles.changePhoto,
                          backgroundColor: photo
                            ? 'rgba(255, 255, 255, 0.3)'
                            : '#FFFFFF',
                        }}
                      >
                        <Photo
                          width={24}
                          height={24}
                          fill={photo ? '#FFF' : '#BDBDBD'}
                          stroke={'transparent'}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </Camera>
              </View>
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
          </View> */}
          <TouchableOpacity
            onPress={deletePost}
            style={styles.deleteBtn}
            activeOpacity={0.8}
          >
            <Trash size={24} fill="#BDBDBD" stroke="#BDBDBD" />
          </TouchableOpacity>
        </View>
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
    flex: 1,
    justifyContent: 'space-between',
  },
  container2: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
  },

  button: { alignSelf: 'center' },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
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
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
