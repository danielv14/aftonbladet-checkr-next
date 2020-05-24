import fetch from 'isomorphic-unfetch';
import { SCRAPING_URL } from './config';

export const fetchAftonbladetText = async () => {
  try {
    const res = await fetch(SCRAPING_URL);
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(`Failed to fetch target url ${SCRAPING_URL}`, error);
    return '';
  }
};
