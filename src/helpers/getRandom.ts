export const getRandom = (totalCount: number): number => {
  return Math.floor(Math.random() * (totalCount - 1) + 1);
};
