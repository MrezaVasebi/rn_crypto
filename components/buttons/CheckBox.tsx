import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  View,
} from "react-native";
import IconButton from "./IconButton";

interface ICheckBox {
  lbl: string;
  isSelected: boolean;
  lblStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<TextStyle>;
}

const CheckBox = (props: ICheckBox & TouchableOpacityProps) => {
  return (
    <IconButton
      onPress={props.onPress}
      btnStyle={[styles.btnStyle, props.btnStyle]}
    >
      <View style={styles.circleStyle}>
        {props.isSelected && (
          <AntDesign size={15} name={"check"} color={appColors.yellow} />
        )}
      </View>

      <AppText lbl={props.lbl} lblStyle={[styles.lblStyle, props.lblStyle]} />
    </IconButton>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  lblStyle: {
    fontSize: 12,
    color: appColors.yellow,
  },
  circleStyle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.yellow,
  },
});
