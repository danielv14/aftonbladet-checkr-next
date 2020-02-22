import dateFormat from 'dateformat';

const DATE_FORMAT = 'yyyy-mm-dd HH:MM:ss'; // Example 2020-01-20 21:43:12

export const getCurrentDate = () => {
  const now = new Date();
  const formattedDate = dateFormat(now, DATE_FORMAT);
  return formattedDate;
};
