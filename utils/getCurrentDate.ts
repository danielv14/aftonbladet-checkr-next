import dateFormat from 'dateformat';

const DATE_FORMAT = 'yyyy-mm-dd HH:MM:ss'; // Example 2020-01-20 21:43:12
const DATE_FORMAT_WITHOUT_TIME = 'yyyy-mm-dd'; // Example 2020-01-20

export const getCurrentDate = () => {
  const now = new Date();
  const formattedDate = dateFormat(now, DATE_FORMAT);
  return formattedDate;
};

export const getDateWithoutTime = (date: string) => {
  const dateObj = new Date(date);
  const formattedDate = dateFormat(dateObj, DATE_FORMAT_WITHOUT_TIME);
  return formattedDate;
};
