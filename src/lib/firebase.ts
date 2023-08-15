import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqQ0j9vmR_9jzPMUMRX64k1wsL-7A6OPw',
  authDomain: 'redux-thunk-with-firbase.firebaseapp.com',
  projectId: 'redux-thunk-with-firbase',
  storageBucket: 'redux-thunk-with-firbase.appspot.com',
  messagingSenderId: '403507668112',
  appId: '1:403507668112:web:c2af8637c723ec1ea1e415',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
