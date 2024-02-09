

import { initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getDatabase } from '@react-native-firebase/database';

const firebaseConfig = {
  // Firebase konfigürasyon bilgileri buraya eklenecek
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

export { app, auth, database };
