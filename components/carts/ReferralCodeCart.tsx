import { appColors } from "@/appColors";
import { IconButton } from "@/buttons";
import AppText from "@/texts/AppText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const ReferralCodeCart = ({
  msg,
  containerStyle,
}: {
  msg: string;
  containerStyle?: {};
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <IconButton btnStyle={styles.btnCopyStyle}>
        <Ionicons name="copy" size={25} color={appColors.placeHolder} />
      </IconButton>

      <View style={styles.txtStyle}>
        <AppText lbl={msg} lblStyle={{ color: appColors.green }} />
      </View>
    </View>
  );
};

export default ReferralCodeCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnCopyStyle: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.primary,
  },
  txtStyle: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    borderStyle: "dashed",
    justifyContent: "center",
    borderColor: appColors.green,
    backgroundColor: appColors.secondary,
  },
});
