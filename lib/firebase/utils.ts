import * as firebase from 'firebase';

type documentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

export const toFireStoreDocData = (doc: documentData) => {
  return { id: doc.id, ...doc.data() };
};
