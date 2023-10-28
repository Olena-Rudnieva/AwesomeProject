import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/Home';
import Logout from './assets/svg/logout.svg';

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
