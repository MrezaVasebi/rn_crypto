import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const BackButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.backStyle} onPress={props.onPress}>
      <AntDesign name="left" color={appColors.yellow} size={15} />

      <AppText
        lbl="Back"
        lblStyle={{ color: appColors.yellow, marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
