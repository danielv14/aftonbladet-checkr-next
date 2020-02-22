import * as firebase from 'firebase';
import { Checker } from '../../interfaces/Checker';
import { db } from './db';

type documentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

export const toFireStoreDocData = (doc: documentData): Checker => {
  return { id: doc.id, amount: doc.data().amount, created: doc.data().created };
};

export const deleteQueryBatch = async (
  query: firebase.firestore.Query<firebase.firestore.DocumentData>,
  resolve: (value?: unknown) => void,
  reject: (value?: unknown) => void,
) => {
  try {
    const snapshot = await query.get();
    if (snapshot.size == 0) {
      resolve();
      return;
    }
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    if (snapshot.size == 0) {
      resolve();
      return;
    }
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(query, resolve, reject);
    });
  } catch (error) {
    console.log('Failed to batch delete entries', error);
    reject();
  }
};
