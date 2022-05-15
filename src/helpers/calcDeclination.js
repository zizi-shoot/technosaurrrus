export const calcDeclination = (amount, words) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return words[(amount % 100 > 4 && amount % 100 < 20) ? 2 : cases[(amount % 10 < 5) ? amount % 10 : 5]];
};
