import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RegistrationScreen } from '../Screens/Auth/RegistrationScreen';
import { LoginScreen } from '../Screens/Auth/LoginScreen';
import { Home } from '../Screens/Home';

import { selectUserAuthorised } from '../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeAuthStatusUser } from '../redux/auth/authOperations';

const MainStack = createStackNavigator();

export const Main = () => {
  const dispatch = useDispatch();
  const isAuthorised = useSelector(selectUserAuthorised);

  useEffect(() => {
    dispatch(changeAuthStatusUser());
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {!isAuthorised ? (
          <MainStack.Navigator
            initialRouteName="RegistrationScreen"
            screenOptions={{ headerShown: false }}
          >
            <MainStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          </MainStack.Navigator>
        ) : (
          <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
