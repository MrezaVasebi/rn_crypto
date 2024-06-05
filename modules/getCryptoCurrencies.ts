import { currencies } from "@/currencies";

export function getCryptoCurrencies(): string[] {
  let arr: string[] = [];
  Object.keys(currencies).forEach((key) => {
    arr.push(currencies[key as keyof typeof currencies]);
  });

  return arr;
}
