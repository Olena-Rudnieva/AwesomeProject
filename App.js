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
import { MapScreen } from './Screens/MapScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { Home } from './Screens/Home';
// import Logout from './assets/svg/logout.svg';
import ArrowLeft from './assets/svg/arrow-left.svg';

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
          <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: true,
              title: 'Мапа',
            }}
          />
          <MainStack.Screen
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
              // headerLeft: () => (
              //   <TouchableOpacity
              //     style={{
              //       paddingLeft: 16,
              //     }}
              //     onPress={() => navigation.navigate('PostsScreen')}
              //   >
              //     <ArrowLeft
              //       width={24}
              //       height={24}
              //       stroke={'rgba(33, 33, 33, 0.8)'}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />
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
