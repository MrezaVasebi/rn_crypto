import { appColors } from "./appColors";
import {
  ActiveOrderType,
  ChartType,
  DashboardTransactionType,
  DashboardWalletType,
  DepositType,
  LatestTransactionType,
  MarketType,
  TransactionType,
  TransferType,
  WalletTransactionType,
  WithdrawType,
} from "./types";

const date = new Date().toLocaleDateString();
const time = `${new Date().getHours()}:${new Date().getMinutes()}`;

export const transactionLists: TransactionType[] = [
  {
    time: time,
    currency: "BTC",
    amount: "1.2352",
    operation: "Sell",
    date: date,
  },
  {
    time: time,
    currency: "BCH",
    amount: "1.2352",
    operation: "Buy",
    date: date,
  },
  {
    time: time,
    currency: "ETH",
    amount: "1.2352",
    operation: "Buy",
    date: date,
  },
  {
    time: time,
    currency: "LTC",
    amount: "1.2352",
    operation: "Sell",
    date: date,
  },
  {
    time: time,
    currency: "USDT",
    amount: "1.2352",
    operation: "Sell",
    date: date,
  },
];

export const walletTransactionLists: WalletTransactionType[] = [
  {
    time: time,
    currency: "BTC",
    amount: "1.2352",
    operation: "Deposit",
    date: date,
  },
  {
    time: time,
    currency: "BCH",
    amount: "1.2352",
    operation: "Deposit",
    date: date,
  },
  {
    time: time,
    currency: "ETH",
    amount: "1.2352",
    operation: "Withdraw",
    date: date,
  },
  {
    time: time,
    currency: "LTC",
    amount: "1.2352",
    operation: "Withdraw",
    date: date,
  },
  {
    time: time,
    currency: "USDT",
    amount: "1.2352",
    operation: "Deposit",
    date: date,
  },
  {
    time: time,
    currency: "BCH",
    amount: "1.2352",
    operation: "Deposit",
    date: date,
  },
  {
    time: time,
    currency: "ETH",
    amount: "1.2352",
    operation: "Withdraw",
    date: date,
  },
  {
    time: time,
    currency: "LTC",
    amount: "1.2352",
    operation: "Withdraw",
    date: date,
  },
  {
    time: time,
    currency: "USDT",
    amount: "1.2352",
    operation: "Deposit",
    date: date,
  },
];

export const transferLists: TransferType[] = [
  {
    time: time,
    currency: "BTC",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "BCH",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "ETH",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "LTC",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "USDT",
    amount: "1.2352",
    date: date,
  },
];

export const depositLists: DepositType[] = [
  {
    time: time,
    currency: "BTC",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "BCH",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "ETH",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "LTC",
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    currency: "USDT",
    amount: "1.2352",
    date: date,
  },
];

export const withdrawLists: WithdrawType[] = [
  {
    time: time,
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    amount: "1.2352",
    date: date,
  },
  {
    time: time,
    amount: "1.2352",
    date: date,
  },
];

export const marketCartList: MarketType[] = [
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
  { amount: "2.0352", date: date },
];

export const latestTransactionList: LatestTransactionType[] = [
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Sell", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Sell", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Sell", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Sell", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
  { price: "365.000.325", amount: "1.32025", isBuy: "Buy", time },
];

export const activeOrderList: ActiveOrderType[] = [
  {
    time,
    date,
    currency: "BTC",
    amount: "1.3252",
    price: "200.000",
    fill: "20",
    status: "Buy",
  },
  {
    time,
    date,
    currency: "BCH",
    amount: "1.3252",
    price: "200.000",
    fill: "30",
    status: "Sell",
  },
  {
    time,
    date,
    currency: "ETH",
    amount: "1.3252",
    price: "200.000",
    fill: "45",
    status: "Buy",
  },
  {
    time,
    date,
    currency: "LTC",
    amount: "1.3252",
    price: "200.000",
    fill: "55",
    status: "Buy",
  },
  {
    time,
    date,
    currency: "USDT",
    amount: "1.3252",
    price: "200.000",
    fill: "77",
    status: "Sell",
  },
];

export const dashboardTransactionList: DashboardTransactionType[] = [
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Deposit",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Deposit",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Withdraw",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Withdraw",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Deposit",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Withdraw",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Withdraw",
  },
  {
    date,
    time,
    amount: "35.000.000",
    cardNumber: "5047 0610 2406 2432",
    status: "Deposit",
  },
];

export const dashboardWalletList: DashboardWalletType[] = [
  { name: "RIAL", amount: "12.000.000", address: "" },
  {
    name: "BTC",
    amount: "2.123456",
    address: "kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg",
  },
  {
    name: "USDT",
    amount: "2.123456",
    address: "kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg",
  },
  {
    name: "ETH",
    amount: "2.123456",
    address: "kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg",
  },
  {
    name: "LTC",
    amount: "2.123456",
    address: "kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg",
  },
  {
    name: "BCH",
    amount: "2.123456",
    address: "kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg",
  },
];

export const chartDataList: ChartType[] = [
  {
    name: "BTC",
    amount: "4.235.325",
    color: appColors.green,
    upDown: "-10.325.325",
    bestBuy: "99.000.000",
    bestSell: "99.000.000",
  },
  {
    name: "BCH",
    amount: "4.235.325",
    color: appColors.pink,
    upDown: "+10.325.325",
    bestBuy: "99.000.000",
    bestSell: "99.000.000",
  },
  {
    name: "ETH",
    amount: "4.235.325",
    color: appColors.blue,
    upDown: "+10.325.325",
    bestBuy: "99.000.000",
    bestSell: "99.000.000",
  },
  {
    name: "LTC",
    amount: "4.235.325",
    color: appColors.lightRed,
    upDown: "-10.325.325",
    bestBuy: "99.000.000",
    bestSell: "99.000.000",
  },
  {
    name: "USDT",
    amount: "4.235.325",
    color: appColors.lightGreen,
    upDown: "+10.325.325",
    bestBuy: "99.000.000",
    bestSell: "99.000.000",
  },
];
