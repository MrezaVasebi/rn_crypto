import { appColors } from "@/appColors";
import { images } from "@/images";
import AppText from "@/texts/AppText";
import { TransactionType } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TableRow } from "..";

interface ITransactionsCart {
  index: number;
  data: TransactionType;
}

const TransactionsCart = ({ data, index }: ITransactionsCart) => {
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
          size={20}
          name={data?.operation === "Sell" ? "arrowleft" : "arrowright"}
          color={data?.operation === "Sell" ? appColors.green : appColors.pink}
        />

        <AppText
          lbl={data?.operation}
          lblStyle={{ color: appColors.deactivateText }}
        />
      </View>
    </View>
  );
};

export default TransactionsCart;

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
  cover: {
    right: 0,
    width: 5,
    height: "100%",
    position: "absolute",
  },
});
