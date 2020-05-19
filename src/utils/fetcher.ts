import fetch from 'isomorphic-unfetch';

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
