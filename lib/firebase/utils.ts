import * as firebase from 'firebase';
import { Checker } from '../../interfaces/Checker';

type documentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

export const toFireStoreDocData = (doc: documentData): Checker => {
  return { id: doc.id, amount: doc.data().amount, created: doc.data().created };
};
