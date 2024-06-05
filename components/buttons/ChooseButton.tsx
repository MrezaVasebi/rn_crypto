import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type Props = {
  lbl: string;
  btnStyle?: StyleProp<ViewStyle>;
  lblStyle?: StyleProp<TextStyle>;
};

type ChooseButtonType = TouchableOpacityProps & Props;

const ChooseButton = (props: ChooseButtonType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[styles.chooseAccount, props.btnStyle]}
    >
      <AppText
        lbl={props.lbl}
        lblStyle={[styles.lblChooseAccount, props.lblStyle]}
      />

      <AntDesign name="down" size={10} color={appColors.deactivateText} />
    </TouchableOpacity>
  );
};

export default ChooseButton;

const styles = StyleSheet.create({
  chooseAccount: {
    height: 45,
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: appColors.secondary,
  },
  lblChooseAccount: {
    flex: 1,
    fontSize: 12,
    color: appColors.deactivateText,
  },
});
