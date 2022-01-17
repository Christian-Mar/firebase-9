import { initializeApp } from 'firebase/app'; 
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBRXYAKHxp0_hl1269N_Nt1N0jrpHykvbg',
	authDomain: 'readinglistapp-bd446.firebaseapp.com',
	projectId: 'readinglistapp-bd446',
	storageBucket: 'readinglistapp-bd446.appspot.com',
	messagingSenderId: '393681797362',
	appId: '1:393681797362:web:5fae0f36dab4c03fd7d06b',
};
initializeApp(firebaseConfig)

const db = getFirestore();
const auth = getAuth();

export { db, auth };