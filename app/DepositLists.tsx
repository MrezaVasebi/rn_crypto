import { appColors } from "@/appColors";
import { DepositCart } from "@/carts";
import TableRow from "@/TableRow";
import { DepositType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IDepositList {
  data: DepositType[];
}

const DepositList = ({ data }: IDepositList) => {
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
        return <DepositCart index={index} data={el} key={index} />;
      })}
    </View>
  );
};

export default DepositList;

const styles = StyleSheet.create({
  captionStyle: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
