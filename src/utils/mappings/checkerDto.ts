import * as firebase from 'firebase';
import { CheckerDto } from '../../interfaces/Checker';
type documentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

export const fromFireStoreDocData = (doc: documentData): CheckerDto => {
  return { id: doc.id, amount: doc.data().amount, created: doc.data().created };
};
