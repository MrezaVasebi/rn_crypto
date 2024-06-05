import { appColors } from "@/appColors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "./buttons";
import AppText from "./texts/AppText";

const WalletAddress = () => {
  return (
    <View style={styles.walletContainer}>
      <AppText
        lbl="kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg"
        lblStyle={styles.addressStyle}
      />

      <View style={styles.lineAddress} />

      <View style={{ alignItems: "center" }}>
        <IconButton btnStyle={styles.btnCopyStyle}>
          <AppText
            lbl="Copy Address"
            lblStyle={{ color: appColors.activateText }}
          />

          <Feather
            size={20}
            name="copy"
            style={{ marginLeft: 10 }}
            color={appColors.deactivateText}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default WalletAddress;

const styles = StyleSheet.create({
  walletContainer: {
    height: 85,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-evenly",
    borderColor: appColors.deactivateText,
  },
  addressStyle: {
    textAlign: "center",
    color: appColors.activateText,
  },
  lineAddress: {
    height: 1,
    backgroundColor: appColors.deactivateText,
  },
  btnCopyStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
