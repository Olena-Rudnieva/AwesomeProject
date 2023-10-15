import { useState } from 'react';
import {
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { PostsList } from '../Components/PostsList';
const avatar = require('../assets/images/avatar-photo.png');

export const PostsScreen = () => {
  //   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   >
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <PostsList />
    </View>
    //   </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },

  title: {
    // marginBottom: 43,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    letterSpacing: -0.408,
    lineHeight: 22,
    color: '#212121',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
    marginRight: 'auto',
  },
  userName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.80)',
  },
});
