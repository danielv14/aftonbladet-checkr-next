export const validFirebaseApiKey = (key: string | string[]): boolean =>
  key ? key === process.env.FIREBASE_API_KEY : false;
