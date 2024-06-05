import { appColors } from "@/appColors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

interface IAppText extends TextProps {
  lbl: string;
  lblStyle?: StyleProp<TextStyle>;
}

const AppText = (props: IAppText) => {
  return <Text style={[styles.lblStyle, props.lblStyle]}>{props.lbl}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 15,
    fontFamily: "medium",
    color: appColors.white,
  },
});
