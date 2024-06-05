import { appColors } from "@/appColors";
import { TransferCart } from "@/carts";
import TableRow from "@/TableRow";
import { TransferType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface ITransferList {
  data: TransferType[];
}

const TransferList = ({ data }: ITransferList) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.captionStyle}>
        {["Time.Date", "Currency", "Amount"].map((el, index) => {
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
        return <TransferCart index={index} data={el} key={index} />;
      })}
    </View>
  );
};

export default TransferList;

const styles = StyleSheet.create({
  captionStyle: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
