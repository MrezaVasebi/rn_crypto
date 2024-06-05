import { appColors } from "@/appColors";
import { TransactionsCart } from "@/carts";
import TableRow from "@/TableRow";
import { TransactionType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface ITransactionLists {
  data: TransactionType[];
}

const TransactionLists = ({ data }: ITransactionLists) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.captionStyle}>
        {["Time.Date", "Currency", "Amount", "Operation"].map((el, index) => {
          return (
            <TableRow
              lbl={el}
              key={index}
              style={{ color: appColors.deactivateText }}
            />
          );
        })}
      </View>

      {data.map((el, index) => {
        return <TransactionsCart index={index} data={el} key={index} />;
      })}
    </View>
  );
};

export default TransactionLists;

const styles = StyleSheet.create({
  captionStyle: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
