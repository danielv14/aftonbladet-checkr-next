import fetch from 'isomorphic-unfetch';

export const scrapeForText = async (url: string): Promise<string> => {
  try {
    const res = await fetch(url);
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(`Failed to fetch target url ${url}`, error);
    return '';
  }
};
