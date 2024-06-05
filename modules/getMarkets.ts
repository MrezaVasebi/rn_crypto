import { markets } from "@/markets";

export const getMarkets = () => {
  let arr = [];
  for (const iterator in markets) {
    arr.push(markets[iterator as keyof typeof markets]);
  }

  return arr;
};
