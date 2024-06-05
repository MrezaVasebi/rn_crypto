import { appColors } from "@/appColors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { IconButton } from "./buttons";
import AppText from "./texts/AppText";

const AddingWallet = ({
  onPress,
}: {
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.bottomHeaderContainer}>
      <AppText lbl="Your Wallets" lblStyle={{ fontSize: 16 }} />

      <IconButton onPress={onPress} btnStyle={styles.btnAddStyle}>
        <AntDesign
          name="plus"
          color={appColors.border}
          style={{ marginRight: 5 }}
        />

        <AppText
          lbl="Add Wallet"
          lblStyle={{ color: appColors.border, fontSize: 13 }}
        />
      </IconButton>
    </View>
  );
};

export default AddingWallet;

const styles = StyleSheet.create({
  bottomHeaderContainer: {
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnAddStyle: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    borderColor: appColors.border,
  },
});
