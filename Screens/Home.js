import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PostsScreen } from './Main/PostsScreen';
import { CreatePostsScreen } from './Main/CreatePostsScreen';
import { ProfileScreen } from './Main/ProfileScreen';

import ArrowLeft from '../assets/svg/arrow-left.svg';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      id="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6C00',
        tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingHorizontal: 59,
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'PostsScreen') {
            iconName = 'grid';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'plus';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user';
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View
                style={{
                  backgroundColor: focused ? '#FF6C00' : 'transparent',
                  borderRadius: 20,
                  width: 70,
                  height: 40,

                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Feather
                  name={iconName}
                  size={24}
                  color={color}
                  style={{ color: focused ? 'white' : 'rgba(33, 33, 33, 0.8)' }}
                />
              </View>
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: 'none' },
          headerTitle: 'Створити публікацію',
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
              onPress={() => navigation.navigate('PostsScreen')}
            >
              <ArrowLeft
                width={24}
                height={24}
                stroke={'rgba(33, 33, 33, 0.8)'}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
