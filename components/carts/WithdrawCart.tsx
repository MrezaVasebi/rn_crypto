import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { WithdrawType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TableRow } from "..";

interface IWithdrawCart {
  index: number;
  data: WithdrawType;
}

const WithdrawCart = ({ data, index }: IWithdrawCart) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.cover,
          backgroundColor: index % 2 === 0 ? appColors.green : appColors.yellow,
        }}
      />

      <View style={styles.dateTime}>
        <AppText lbl={data?.time} lblStyle={{ fontSize: 13 }} />
        <AppText lbl={data?.date} lblStyle={{ marginTop: 5, fontSize: 13 }} />
      </View>

      <TableRow lbl={data?.amount} />
    </View>
  );
};

export default WithdrawCart;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.primary,
  },
  dateTime: {
    flex: 1,
    alignItems: "center",
  },
  cover: {
    right: 0,
    width: 5,
    height: "100%",
    position: "absolute",
  },
});
