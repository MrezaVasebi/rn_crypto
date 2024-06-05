import AppText from "@/texts/AppText";
import React from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface IAppButton extends TouchableOpacityProps {
  lblTxt: string;
  btnStyle?: StyleProp<ViewStyle>;
  lblStyle?: StyleProp<TextStyle>;
}

const AppButton = (props: IAppButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={props.btnStyle}
      onPress={props.onPress}
    >
      <AppText lbl={props.lblTxt} lblStyle={props.lblStyle} />
    </TouchableOpacity>
  );
};

export default AppButton;
