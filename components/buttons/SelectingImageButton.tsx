import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ISelectingImageButton {
  msg: string;
  status: string;
  btnStyle?: StyleProp<ViewStyle>;
}

const SelectingImageButton = (
  props: ISelectingImageButton & TouchableOpacityProps
) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[
        styles.btnStyle,
        {
          borderWidth: props.status === "Uploaded" ? 1 : 0,
          borderColor: props.status === "Uploaded" ? appColors.green : "",
        },
        props.btnStyle,
      ]}
    >
      <Entypo name="camera" color={appColors.placeHolder} size={30} />
      <AppText
        lbl={props.msg}
        lblStyle={{ marginVertical: 15, opacity: 0.5 }}
      />
      <AppText
        lbl={props.status}
        lblStyle={{
          fontSize: 13,
          color:
            props.status === "Uploaded" ? appColors.green : appColors.yellow,
        }}
      />
    </TouchableOpacity>
  );
};

export default SelectingImageButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.viewBackColor,
  },
});
