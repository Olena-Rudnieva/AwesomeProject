import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Plus from '../assets/svg/plus.svg';
import Cross from '../assets/svg/cross.svg';
const avatar = require('../assets/images/avatar-photo.png');

export const Avatar = () => {
  const [avatarPhoto, setAvatarPhoto] = useState(false);
  const handleAvatarChange = () => setAvatarPhoto(!avatarPhoto);
  return (
    <View style={styles.avatarWrapper}>
      {avatarPhoto && <Image source={avatar} />}

      <TouchableOpacity
        style={{
          ...styles.avatarIcon,
          borderColor: avatarPhoto ? '#E8E8E8' : '#FF6C00',
        }}
        onPress={handleAvatarChange}
      >
        {avatarPhoto ? (
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
});
