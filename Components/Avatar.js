import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Plus from '../assets/svg/plus.svg';
import Cross from '../assets/svg/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserPhoto } from '../redux/auth/authSelectors';
import * as ImagePicker from 'expo-image-picker';
import { changeAvatarUser } from '../redux/auth/authOperations';
import { uploadImageToStorage } from '../utils/uploadImageToStorage';

export const Avatar = () => {
  const image = useSelector(selectUserPhoto);
  const [avatar, setAvatar] = useState(image);
  const dispatch = useDispatch();

  const handleAddAvatar = async () => {
    const imageFromGallery = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!imageFromGallery.canceled) {
      setAvatar(imageFromGallery.assets[0].uri);

      await uploadImageToStorage(imageFromGallery.assets[0].uri, 'avatars/');

      dispatch(changeAvatarUser(imageFromGallery.assets[0].uri));
    }
  };

  const handleDeleteAvatar = () => {
    setAvatar(null);
    dispatch(changeAvatarUser(null));
  };

  return (
    <View style={styles.avatarWrapper}>
      <Image source={avatar ? { uri: avatar } : null} style={styles.image} />
      <TouchableOpacity
        style={{
          ...styles.avatarIcon,
          borderColor: avatar ? '#E8E8E8' : '#FF6C00',
        }}
        onPress={!avatar ? handleAddAvatar : handleDeleteAvatar}
      >
        {avatar ? (
          <Cross width={13} height={13} fill={'#BDBDBD'} />
        ) : (
          <Plus width={13} height={13} fill={'#FF6C00'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  image: {
    flex: 1,
    borderRadius: 16,
  },
});
