import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { PostsList } from '../../Components/PostsList';
import { useSelector } from 'react-redux';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
} from '../../redux/auth/authSelectors';

export const MainPostsScreen = () => {
  const image = useSelector(selectUserPhoto);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.userWrapper}>
            <View style={styles.user}>
              <Image
                style={styles.avatar}
                source={image ? { uri: image } : null}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userEmail}>{email}</Text>
              </View>
            </View>
          </View>
          <PostsList />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 146,
    backgroundColor: '#ffffff',
  },

  wrapper: {
    paddingHorizontal: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  // userWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },

  title: {
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
    marginBottom: 32,
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
