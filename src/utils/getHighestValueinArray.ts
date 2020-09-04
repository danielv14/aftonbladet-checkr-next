export const getHighestValueInArray = (arr: number[]): number => {
  const [highestValue] = arr.sort().reverse();
  return highestValue;
};
