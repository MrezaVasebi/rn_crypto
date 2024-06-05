import { appColors } from "@/appColors";
import { WithdrawCart } from "@/carts";
import TableRow from "@/TableRow";
import { WithdrawType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IWithdrawLists {
  data: WithdrawType[];
}

const WithdrawLists = ({ data }: IWithdrawLists) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.captionStyle}>
        {["Time.Date", "Amount"].map((el, index) => {
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
        return <WithdrawCart index={index} data={el} key={index} />;
      })}
    </View>
  );
};

export default WithdrawLists;

const styles = StyleSheet.create({
  captionStyle: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
