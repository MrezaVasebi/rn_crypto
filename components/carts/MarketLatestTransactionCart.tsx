import { appColors } from "@/appColors";
import { SimpleButton } from "@/buttons";
import AppText from "@/texts/AppText";
import { LatestTransactionType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TableRow } from "..";

interface IMarketLatestCart {
  isMarket: boolean;
  data: LatestTransactionType[];
  onPress: (value: string) => void;
}

const MarketLatestTransactionCart = (props: IMarketLatestCart) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <AppText
          lbl="Latest Transaction"
          lblStyle={{ color: appColors.white, fontWeight: "bold" }}
        />

        <View style={styles.btnContainer}>
          <SimpleButton
            lblTxt="Market"
            lblStyle={{
              color: props.isMarket ? appColors.primary : appColors.white,
            }}
            btnStyle={{
              marginRight: 5,
              backgroundColor: props.isMarket
                ? appColors.yellow
                : appColors.transparent,
              ...styles.btnStyle,
            }}
            onPress={() => props.onPress("market")}
          />

          <SimpleButton
            lblTxt="Me"
            btnStyle={{
              backgroundColor: !props.isMarket
                ? appColors.yellow
                : appColors.transparent,
              ...styles.btnStyle,
            }}
            lblStyle={{
              color: !props.isMarket ? appColors.primary : appColors.white,
            }}
            onPress={() => props.onPress("me")}
          />
        </View>
      </View>

      <View style={styles.captionStyle}>
        <TableRow lbl="Time" style={{ fontWeight: "bold" }} />
        <TableRow lbl="Price" style={{ fontWeight: "bold" }} />
        <TableRow lbl="Amount" style={{ fontWeight: "bold" }} />
      </View>

      {props.data.map((el, index) => {
        return (
          <View key={index} style={styles.cartStyle}>
            <TableRow lbl={el.time} style={{ color: appColors.placeHolder }} />

            <TableRow lbl={el.price} style={{ color: appColors.placeHolder }} />

            <TableRow
              lbl={el.amount}
              style={{
                color: el.isBuy === "Buy" ? appColors.green : appColors.pink,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default MarketLatestTransactionCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: appColors.viewBackColor,
  },
  btnContainer: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    borderColor: appColors.border,
    justifyContent: "space-between",
  },
  btnStyle: {
    width: 50,
    height: 35,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartStyle: {
    paddingVertical: 8,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: appColors.deactivateText,
  },
  captionStyle: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
