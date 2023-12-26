import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Avatar } from '../../Components/Avatar';
import { PostsList } from '../../Components/PostsList';
const background = require('../../assets/images/background.png');
import Logout from '../../assets/svg/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserName } from '../../redux/auth/authSelectors';
import { authSignOutUser } from '../../redux/auth/authOperations';
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const userId = useSelector(selectUserId);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), where('userId', '==', userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allPosts = [];
      querySnapshot.forEach((doc) => {
        allPosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(allPosts);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-180}
        style={styles.container}
      >
        <ImageBackground
          source={background}
          // style={{
          //   ...styles.background,
          //   // justifyContent: posts ? 'flex-start' : 'flex-end',
          //   justifyContent: !posts ? 'flex-end' : 'flex-center',
          // }}
          style={[
            styles.background,
            { justifyContent: posts.length ? 'flex-start' : 'flex-end' },
          ]}
        >
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.logoutIcon} onPress={signOut}>
              <Logout width={24} height={24} stroke={'#BDBDBD'} />
            </TouchableOpacity>
            <Avatar />

            <Text style={styles.title}>{name}</Text>

            <View style={styles.wrapperList}>
              <PostsList posts={posts} />
            </View>
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
    paddingTop: 22,
    paddingHorizontal: 16,
    marginTop: 147,
  },
  logoutIcon: {
    marginBottom: 46,
    marginLeft: 'auto',
  },

  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    lineHeight: 36,
    color: '#212121',
  },

  wrapperList: {
    marginBottom: 240,
  },
});
