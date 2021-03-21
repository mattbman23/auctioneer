import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: 'AIzaSyBCS_66Lh7MZvbYbwoM0YMv4oHpDcexAps',
  authDomain: 'auctioneer-7020f.firebaseapp.com',
  projectId: 'auctioneer-7020f',
  storageBucket: 'auctioneer-7020f.appspot.com',
  messagingSenderId: '159246459335',
  appId: '1:159246459335:web:b200f4e877df1aa00fb9e2',
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
