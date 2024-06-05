import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const MessageCart = ({ msg }: { msg: string }) => {
  return (
    <LinearGradient
      style={styles.rootStyle}
      colors={[appColors.secondary, appColors.primary]}
    >
      <AppText lbl="Company Name" lblStyle={{ marginBottom: 10 }} />

      <AppText lbl={msg} lblStyle={styles.msgStyle} />
    </LinearGradient>
  );
};

export default MessageCart;

const styles = StyleSheet.create({
  rootStyle: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    alignItems: "center",
    borderColor: "(rgba(255,255,255,.3))",
  },
  msgStyle: {
    opacity: 0.5,
    fontSize: 13,
  },
});
