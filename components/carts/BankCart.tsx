import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const BankCart = (props: { bankNumber: string }) => {
  return (
    <View style={styles.rootStyle}>
      <AppText lbl={props.bankNumber} />

      <View style={{ position: "absolute", right: 10 }}>
        <AntDesign name="check" color={appColors.green} size={15} />
      </View>
    </View>
  );
};

export default BankCart;

const styles = StyleSheet.create({
  rootStyle: {
    padding: 10,
    width: "95%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.white,
  },
});
