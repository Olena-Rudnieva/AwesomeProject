import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { MainPostsScreen } from '../PostsPage/MainPostsScreen';
import { MapScreen } from '../PostsPage/MapScreen';
import { CommentsScreen } from '../PostsPage/CommentsScreen';
import { StyleSheet } from 'react-native';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import Logout from '../../assets/svg/logout.svg';
import { useDispatch } from 'react-redux';
import { authSignOutUser } from '../../redux/auth/authOperations';

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
    // navigation.navigate('MainPostsScreen');
  };

  return (
    <NestedScreen.Navigator
      initialRouteName="MainPostsScreen"
      screenOptions={{ headerShown: false }}
    >
      <NestedScreen.Screen
        name="MainPostsScreen"
        component={MainPostsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Публікації',
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: 'Roboto-Medium',
            color: '#212121',
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity
              style={{
                paddingRight: 16,
              }}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Logout width={24} height={24} stroke={'#BDBDBD'} />
            </TouchableOpacity>
          ),
        })}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerShown: true,
          title: 'Коментарі',
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: 'Roboto-Medium',
            color: '#212121',
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 16,
              }}
              onPress={signOut}
            >
              <ArrowLeft
                width={24}
                height={24}
                stroke={'rgba(33, 33, 33, 0.8)'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
          title: 'Мапа',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 16,
              }}
              onPress={() => navigation.navigate('MainPostsScreen')}
            >
              <ArrowLeft
                width={24}
                height={24}
                stroke={'rgba(33, 33, 33, 0.8)'}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
