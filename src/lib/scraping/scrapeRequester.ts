import fetch from 'isomorphic-unfetch';

export const SCRAPING_URL = 'https://www.aftonbladet.se/';

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
