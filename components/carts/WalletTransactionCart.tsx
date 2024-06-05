import { appColors } from "@/appColors";
import { images } from "@/images";
import AppText from "@/texts/AppText";
import { WalletTransactionType } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TableRow } from "..";

interface ITransactionsCart {
  index: number;
  length: number;
  data: WalletTransactionType;
}

const WalletTransactionsCart = ({ data, index, length }: ITransactionsCart) => {
  return (
    <View
      style={{
        ...styles.container,
        marginBottom: index === length - 1 ? 0 : 10,
      }}
    >
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

      <View style={styles.tableHeaderStyle}>
        <Image
          style={styles.currencyIcon}
          source={images[data?.currency as keyof typeof images]}
        />
        <AppText lbl={data?.currency} lblStyle={{ fontSize: 13 }} />
      </View>

      <TableRow lbl={data?.amount} />

      <View style={{ ...styles.tableHeaderStyle }}>
        <AntDesign
          size={15}
          name={data?.operation === "Deposit" ? "arrowleft" : "arrowright"}
          color={
            data?.operation === "Withdraw" ? appColors.green : appColors.pink
          }
        />

        <AppText lbl={data?.operation} lblStyle={styles.lblOperation} />
      </View>
    </View>
  );
};

export default WalletTransactionsCart;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 10,
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
  tableHeaderStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  currencyIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  lblOperation: {
    fontSize: 13,
    color: appColors.deactivateText,
  },
  cover: {
    right: 0,
    width: 5,
    height: "100%",
    position: "absolute",
  },
});
