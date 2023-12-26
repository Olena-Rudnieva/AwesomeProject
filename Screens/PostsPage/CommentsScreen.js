import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import Vector from '../../assets/svg/vector.svg';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
} from '../../redux/auth/authSelectors';
import { formatDate } from '../../utils/formatDate';

export const CommentsScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const { id, image, comments } = route.params;
  const [isActive, setIsActive] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState(comments);
  const avatar = useSelector(selectUserPhoto);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  const getAllComments = async () => {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);

    setAllComments(docSnap.data().comments);
  };

  useEffect(() => {
    {
      isFocused
        ? navigation?.getParent('Home')?.setOptions({
            tabBarStyle: { display: 'none' },
          })
        : navigation?.getParent('Home')?.setOptions({
            tabBarStyle: {
              display: 'flex',
              height: 83,
              paddingTop: 9,
              paddingHorizontal: 59,
            },
          });
    }
  }, [isFocused]);

  useEffect(() => {
    getAllComments();
  }, []);

  const createNewComment = async () => {
    if (!comment.trim()) return alert('Залиште ваш коментар!');

    const docRef = doc(db, 'posts', id);

    await updateDoc(docRef, {
      comments: [
        ...allComments,
        {
          comment,
          avatar,
          email,
          name,
          commentDate: Date.now(),
        },
      ],
    });

    setComment('');
    getAllComments();
    setIsActive(false);
  };

  const handleFocus = () => {
    setShowKeyboard(true);
    setIsActive(true);
  };

  const handleBlur = () => {
    setShowKeyboard(false);
    setIsActive(false);
  };

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View>
              <Image
                source={{
                  uri: image,
                }}
                style={styles.image}
              />
              <View style={styles.itemWrapper}>
                {allComments.map((item, index) => (
                  <View key={item.id}>
                    <View
                      style={
                        index % 2 === 1
                          ? styles.commentItemEven
                          : styles.commentItem
                      }
                    >
                      <Image source={avatar} />
                      <View
                        style={
                          index % 2 === 1
                            ? styles.commentWrapperEven
                            : styles.commentWrapper
                        }
                      >
                        <Text style={styles.text}>{item.comment}</Text>
                        <Text
                          style={
                            index % 2 === 1
                              ? styles.textTimeEven
                              : styles.textTime
                          }
                        >
                          {formatDate(item.commentDate)}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardView}
            >
              <View style={styles.inputWrapper}>
                <TextInput
                  multiline={true}
                  numberOfLines={0}
                  style={{
                    ...styles.input,
                    backgroundColor: isActive ? '#FFFFFF' : '#F6F6F6',
                    borderColor: isActive ? '#FF6C00' : '#E8E8E8',
                  }}
                  placeholder="Коментувати..."
                  placeholderTextColor={'#BDBDBD'}
                  value={comment}
                  onChangeText={(value) => setComment(value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <View style={styles.button}>
                  <TouchableOpacity
                    disabled={!comment}
                    onPress={createNewComment}
                  >
                    <Vector width={10} height={14} fill={'#FFF'} />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 24,
    paddingBottom: 16,
  },
  wrapper: {
    paddingHorizontal: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: 343,
    height: 240,
    marginBottom: 28,
    borderRadius: 8,
  },

  itemWrapper: {
    // marginBottom: 28,
    maxHeight: 323,
  },
  commentItem: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  commentItemEven: {
    flexDirection: 'row-reverse',
    gap: 16,
    marginBottom: 16,
  },
  commentWrapper: {
    width: 299,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  commentWrapperEven: {
    width: 299,
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#212121',
    marginBottom: 8,
  },
  textTime: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#BDBDBD',
    textAlign: 'right',
  },
  textTimeEven: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#BDBDBD',
    textAlign: 'left',
  },
  //   inputWrapper: { marginBottom: 16 },
  input: {
    position: 'relative',
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 50,
    minHeight: 50,
    borderRadius: 100,
    borderWidth: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },

  button: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: '#FF6C00',
    zIndex: 100,
  },
  keyboardView: {
    flex: 1,
  },
  test: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: '#FF6C00',
    zIndex: 100,
  },
});
