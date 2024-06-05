import DepositLists from "@/DepositLists";
import {
  depositLists,
  transactionLists,
  transferLists,
  withdrawLists,
} from "@/dummy_data";
import { HistoryHeaderTab } from "@/headers";
import HistoryFilterModal from "@/modals/HistoryFilterModal";
import TabRootPage from "@/TabRootPage";
import TransactionLists from "@/TransactionLists";
import TransferList from "@/TransferList";
import WithdrawLists from "@/WithdrawLists";
import React, { useState } from "react";

const History = () => {
  const [selectedTab, setSelectedTab] = useState<
    "Transaction" | "Transfer" | "Deposit" | "Withdraw"
  >("Transaction");

  const [filterModal, setFilterModal] = useState<boolean>(false);

  const tabData = ["Transaction", "Transfer", "Deposit", "Withdraw"];

  return (
    <TabRootPage contentStyle={{ paddingTop: 35 }}>
      <HistoryHeaderTab
        tabs={tabData}
        selectedTab={selectedTab}
        onPressFilter={() => setFilterModal(true)}
        onPressTab={(value: any) => setSelectedTab(value)}
      />

      {(() => {
        if (selectedTab === "Transaction")
          return <TransactionLists data={transactionLists} />;
        else if (selectedTab === "Transfer")
          return <TransferList data={transferLists} />;
        else if (selectedTab === "Deposit")
          return <DepositLists data={depositLists} />;
        else if (selectedTab === "Withdraw")
          return <WithdrawLists data={withdrawLists} />;
      })()}

      {filterModal && (
        <HistoryFilterModal
          onCloseModal={(value: boolean) => setFilterModal(value)}
        />
      )}
    </TabRootPage>
  );
};

export default History;
