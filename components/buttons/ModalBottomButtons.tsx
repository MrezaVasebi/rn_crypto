import { appColors } from "@/appColors";
import React from "react";
import { StyleSheet, View } from "react-native";
import SimpleButton from "./SimpleButton";

interface IModalBottomButtons {
  onApply?: () => void;
  onCancel?: () => void;
}

const ModalBottomButtons = (props: IModalBottomButtons) => {
  return (
    <View style={styles.btnContainer}>
      <SimpleButton
        lblTxt="Apply"
        onPress={props.onApply}
        btnStyle={{ width: 100, borderRadius: 10 }}
      />

      <SimpleButton
        lblTxt="Cancel"
        onPress={props.onCancel}
        btnStyle={styles.cancelStyle}
        lblStyle={{ color: appColors.deactivateText }}
      />
    </View>
  );
};

export default ModalBottomButtons;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelStyle: {
    width: 100,
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 10,
    borderColor: appColors.deactivateText,
    backgroundColor: appColors.transparent,
  },
});
