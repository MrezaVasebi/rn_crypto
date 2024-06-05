import { appColors } from "@/appColors";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./texts/AppText";

interface IMarketCoverBox {
  lbl: string;
  value: string;
}

const MarketCoverBox = (props: IMarketCoverBox) => {
  return (
    <View style={styles.colorContainer}>
      <View style={styles.colorBoxStyle}>
        <AppText lbl={props.lbl} lblStyle={{ fontSize: 12 }} />

        <AppText lbl={props.value} lblStyle={{ color: appColors.green }} />
      </View>
    </View>
  );
};

export default MarketCoverBox;

const styles = StyleSheet.create({
  colorContainer: {
    marginVertical: 15,
    alignItems: "flex-end",
  },
  colorBoxStyle: {
    height: 42,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    backgroundColor: "#294757",
    borderColor: appColors.green,
    justifyContent: "space-between",
  },
});
