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
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/posts/postsSlice';
import Photo from '../../assets/svg/camera.svg';
import Trash from '../../assets/svg/trash.svg';
import Map from '../../assets/svg/map.svg';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const id = Date.now();
  const post = { id, uri: image, title, place };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Permission to access location was denied');
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     const coords = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     setLocation(coords);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     MediaLibrary.requestPermissionsAsync();
  //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(cameraStatus.status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const dispatch = useDispatch();

  const uploadPhoto = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        await MediaLibrary.createAssetAsync(data.uri);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const reset = () => {
    setTitle('');
    setPlace('');
    setImage(null);
  };

  const onSubmitForm = () => {
    if (!image || !title || !place)
      return console.warn('Зробіть або завантажте фото та введіть дані !');

    dispatch(addPost(post));
    reset();
    navigation.navigate('PostsScreen');
  };

  const keyboardOpen = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
  };

  const deletePost = () => {
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          paddingTop: isShowKeyboard ? 0 : 32,
          paddingBottom: isShowKeyboard ? 0 : 34,
        }}
      >
        <View style={styles.wrapper}>
          <View>
            <View style={styles.photo}>
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

            <TouchableOpacity onPress={uploadPhoto}>
              <Text style={styles.photoText}>
                {image ? 'Редагувати фото' : 'Завантажте фото'}
              </Text>
            </TouchableOpacity>
            <View style={styles.form}>
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="Назва..."
                placeholderTextColor={'#BDBDBD'}
                value={title}
                onChangeText={setTitle}
                onFocus={keyboardOpen}
                onBlur={keyboardHide}
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
                  value={place}
                  onChangeText={setPlace}
                  onFocus={keyboardOpen}
                  onBlur={keyboardHide}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor:
                  image && title && place ? '#FF6C00' : '#F6F6F6',
              }}
              activeOpacity={0.8}
              onPress={onSubmitForm}
            >
              <Text
                style={{
                  ...styles.buttonText,
                  color: image && title && place ? '#FFFFFF' : '#BDBDBD',
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
('');
