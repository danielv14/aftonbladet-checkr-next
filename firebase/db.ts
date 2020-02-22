import * as firebase from 'firebase';
import { firebaseConfig } from './config';

const CHECKERS_COLLECTION = 'checkers';
// Only initialize one app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const checkersCollection = db.collection(CHECKERS_COLLECTION);
