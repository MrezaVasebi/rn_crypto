import { appColors } from "@/appColors";
import React from "react";
import { StyleSheet } from "react-native";
import AppInput, { IAppInput } from "./AppInput";

const SimpleInput = (props: IAppInput) => {
  return (
    <AppInput
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={
        props.placeholderTextColor ?? appColors.deactivateText
      }
      inputStyle={[styles.inputStyle, props.inputStyle]}
    />
  );
};

export default SimpleInput;

const styles = StyleSheet.create({
  inputStyle: {
    height: 45,
    fontSize: 13,
    borderRadius: 5,
    textAlign: "left",
    paddingHorizontal: 5,
    fontFamily: "medium",
    color: appColors.white,
    backgroundColor: appColors.secondary,
  },
});
