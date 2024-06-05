import { appColors } from "@/appColors";
import { StyleSheet } from "react-native";
import AppButton, { IAppButton } from "./AppButton";

const SimpleButton = (props: IAppButton) => {
  return (
    <AppButton
      lblTxt={props.lblTxt}
      onPress={props.onPress}
      lblStyle={[styles.lblStyle, props.lblStyle]}
      btnStyle={[styles.btnStyle, props.btnStyle]}
    />
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.yellow,
  },
  lblStyle: {
    fontSize: 13,
    color: appColors.primary,
  },
});
