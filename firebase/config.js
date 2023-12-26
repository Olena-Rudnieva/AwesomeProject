import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcmfMRmYGuPPa829r_mQf0GKYWi_tn2w0',
  authDomain: 'awesome-project-403411.firebaseapp.com',
  projectId: 'awesome-project-403411',
  storageBucket: 'awesome-project-403411.appspot.com',
  messagingSenderId: '411706880264',
  appId: '1:411706880264:web:44bae682756be45f177cbd',
};

export const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(app);
export const myStorage = getStorage(app);
export const db = getFirestore(app);
