import { firebaseConfig } from '../lib/firebase/config';

export const validFirebaseApiKey = (key: string | string[]): boolean => (key ? key === firebaseConfig.apiKey : false);
