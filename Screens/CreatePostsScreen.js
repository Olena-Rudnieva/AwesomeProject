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
import { useNavigation } from '@react-navigation/native';
import Photo from '../assets/svg/camera.svg';
import Trash from '../assets/svg/trash.svg';
import Map from '../assets/svg/map.svg';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
const photo1 = require('../assets/images/image1.jpg');

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

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

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmitForm = () => {
    if ((!photo && !image) || !title || !location)
      return console.warn('Зробіть або завантажте фото та введіть дані !');
    console.log({ photo, title, location });
    setPhoto(false);
    setTitle('');
    setLocation('');
    saveImage();
    () => navigation.navigate('PostsScreen');
  };

  // const handleKeyboardHide = () => {
  //   setIsShowKeyboard(false);
  //   Keyboard.dismiss();
  // };

  const deletePost = () => {
    setPhoto(false);
    setTitle('');
    setLocation('');
    setImage(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          justifyContent: isShowKeyboard ? 'center' : 'flex-start',
          paddingBottom: isShowKeyboard ? 34 : 100,
        }}
      >
        <View style={styles.wrapper}>
          <View>
            <View style={styles.photo}>
              {photo && (
                <Image
                  source={photo1}
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                  }}
                />
              )}
              <View style={styles.photoContainer}>
                {!image ? (
                  <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.photoView}>
                      <TouchableOpacity onPress={takePicture}>
                        <View
                          style={{
                            ...styles.changePhoto,
                            backgroundColor: image
                              ? 'rgba(255, 255, 255, 0.3)'
                              : '#FFFFFF',
                          }}
                        >
                          <Photo
                            width={24}
                            height={24}
                            fill={image ? '#FFF' : '#BDBDBD'}
                            stroke={'transparent'}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Camera>
                ) : (
                  <Image source={{ uri: image }} style={styles.camera} />
                )}
              </View>
            </View>

            <TouchableOpacity onPress={handlePhotoChange}>
              <Text style={styles.photoText}>
                {photo ? 'Редагувати фото' : 'Завантажте фото'}
              </Text>
            </TouchableOpacity>
            <View style={styles.form}>
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="Назва..."
                placeholderTextColor={'#BDBDBD'}
                value={title}
                onChangeText={setTitle}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
              />
              <View style={styles.inputLocation}>
                <Map
                  width={24}
                  height={24}
                  stroke={'#BDBDBD'}
                  style={styles.iconMap}
                />
                <TextInput
                  style={{ ...styles.input, paddingLeft: 28 }}
                  placeholder="Місцевість..."
                  placeholderTextColor={'#BDBDBD'}
                  value={location}
                  onChangeText={setLocation}
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => setIsShowKeyboard(false)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor:
                  (photo && title && location) || (image && title && location)
                    ? '#FF6C00'
                    : '#F6F6F6',
              }}
              activeOpacity={0.8}
              onPress={onSubmitForm}
            >
              <Text
                style={{
                  ...styles.buttonText,
                  color:
                    (photo && title && location) || (image && title && location)
                      ? '#FFFFFF'
                      : '#BDBDBD',
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
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
    height: 240,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
  },
  photoContainer: { flex: 1, borderRadius: 8, overflow: 'hidden' },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
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
    width: 60,
    height: 60,
    borderRadius: 50,
    // position: 'absolute',
    // zIndex: 10,
    // top: 90,
    // left: 141,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
  inputLocation: {
    position: 'relative',
  },
  iconMap: {
    position: 'absolute',
    top: 13,
    left: 0,
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
