import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDcmfMRmYGuPPa829r_mQf0GKYWi_tn2w0',
  authDomain: 'awesome-project-403411.firebaseapp.com',
  projectId: 'awesome-project-403411',
  storageBucket: 'awesome-project-403411.appspot.com',
  messagingSenderId: '411706880264',
  appId: '1:411706880264:web:44bae682756be45f177cbd',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
