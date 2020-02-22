import { checkersCollection, db } from './db';
import { toFireStoreDocData } from './utils';
import { Checker, FirebaseChecker } from '../../interfaces/Checker';

export const getAllEntries = async () => {
  try {
    const querySnapshot = await checkersCollection.get();
    const checkers = querySnapshot.docs.map(toFireStoreDocData);
    return checkers;
  } catch (err) {
    console.log('Error getting documents', err);
    return [] as Checker[];
  }
};

export const addEntryToDB = (entry: FirebaseChecker) => checkersCollection.add(entry);

export const deleteAllEntriesFromDB = async () => {
  const querySnapshot = await checkersCollection.get();
  const batch = db.batch();
  querySnapshot.forEach(doc => batch.delete(doc.ref));
  return batch.commit();
};
