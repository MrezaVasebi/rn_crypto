import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import React from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import SimpleInput from "./SimpleInput";

interface IMarketInput {
  lbl: string;
  unit: string;
}

const MarketInput = (props: IMarketInput & TextInputProps) => {
  return (
    <View style={styles.amountContainer}>
      <AppText
        lbl={props.lbl}
        lblStyle={{ color: appColors.deactivateText, fontSize: 12 }}
      />

      <View style={styles.amountInputStyle}>
        <AppText
          lbl={props.unit}
          lblStyle={{ color: appColors.blue, fontSize: 12 }}
        />

        <SimpleInput
          value={props.value}
          inputStyle={styles.inputStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default MarketInput;

const styles = StyleSheet.create({
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amountInputStyle: {
    height: 42,
    width: "80%",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    borderColor: appColors.deactivateText,
  },
  lblStyle: {
    fontSize: 12,
    color: appColors.blue,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 5,
  },
});
