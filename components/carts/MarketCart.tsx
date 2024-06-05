import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { MarketType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TableRow } from "..";

interface IMarketCart {
  isBuy: boolean;
  data: MarketType[];
}

const MarketCart = ({ data, isBuy }: IMarketCart) => {
  const color = isBuy ? appColors.green : appColors.pink;

  return (
    <View style={styles.container}>
      <AppText
        lbl={isBuy ? "Buy Offers" : "Sell Offers"}
        lblStyle={{ color: appColors.deactivateText }}
      />

      <View style={styles.captionStyle}>
        <TableRow lbl="Date" style={{ color: appColors.deactivateText }} />
        <TableRow lbl="Amount" style={{ color: appColors.deactivateText }} />
      </View>

      {data.map((el, index) => {
        return (
          <View key={index} style={styles.cartStyle}>
            <TableRow lbl={el.date} style={{ color, fontSize: 12 }} />
            <TableRow lbl={el.amount} style={{ color, fontSize: 12 }} />
          </View>
        );
      })}
    </View>
  );
};

export default MarketCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "49%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: appColors.viewBackColor,
  },
  captionStyle: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: appColors.textColor,
  },
  cartStyle: {
    padding: 8,
    width: "100%",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: appColors.deactivateText,
  },
});
