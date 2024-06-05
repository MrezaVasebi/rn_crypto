export type BuySell = "Buy" | "Sell";
export type DepositWithdraw = "Deposit" | "Withdraw";
export type CurrencyName = "RIAL" | "BTC" | "ETH" | "LTC" | "BCH" | "USDT";

export type TransactionType = {
  date: string;
  time: string;
  amount: string;
  operation: BuySell;
  currency: CurrencyName;
};

export type WalletTransactionType = {
  date: string;
  time: string;
  amount: string;
  currency: CurrencyName;
  operation: DepositWithdraw;
};

export type TransferType = {
  date: string;
  time: string;
  amount: string;
  currency: CurrencyName;
};

export type DepositType = {
  date: string;
  time: string;
  amount: string;
  currency: CurrencyName;
};

export type WithdrawType = {
  date: string;
  time: string;
  amount: string;
};

export type MarketType = {
  amount: string;
  date: string;
};

export type LatestTransactionType = {
  price: string;
  time: string;
  amount: string;
  isBuy: BuySell;
};

export type ActiveOrderType = {
  fill: string;
  time: string;
  date: string;
  price: string;
  amount: string;
  status: BuySell;
  currency: CurrencyName;
};

export type DashboardTransactionType = {
  date: string;
  time: string;
  amount: string;
  cardNumber: string;
  status: DepositWithdraw;
};

export type DashboardWalletType = {
  amount: string;
  address: string;
  name: CurrencyName;
};

export type ChartType = {
  color: string;
  amount: string;
  upDown: string;
  bestBuy: string;
  bestSell: string;
  name: CurrencyName;
};
