import React from "react";
import { StyleSheet } from "react-native";
import AppButton, { IAppButton } from "./AppButton";

const TextButton = (props: IAppButton) => {
  return (
    <AppButton
      lblTxt={props.lblTxt}
      onPress={props.onPress}
      lblStyle={[styles.lblStyle, props.lblStyle]}
      btnStyle={[styles.btnStyle, props.btnStyle]}
    />
  );
};

export default TextButton;

const styles = StyleSheet.create({
  btnStyle: {},
  lblStyle: {},
});
