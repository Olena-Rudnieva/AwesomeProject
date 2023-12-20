import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import { RegistrationScreen } from './Screens/Auth/RegistrationScreen';
import { LoginScreen } from './Screens/Auth/LoginScreen';
import { Home } from './Screens/Home';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { useFonts } from 'expo-font';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <MainStack.Navigator
            initialRouteName="RegistrationScreen"
            screenOptions={{ headerShown: false }}
          >
            <MainStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
          <StatusBar style="auto" />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
