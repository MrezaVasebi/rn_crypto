import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import React from "react";
import { StyleSheet, View } from "react-native";
import SimpleInput from "./SimpleInput";

interface IFromToInput {
  label: string;
  placeholder: string;
}

const FromToInput = (props: IFromToInput) => {
  return (
    <View style={{ marginTop: 10 }}>
      <AppText
        lbl={props.label}
        lblStyle={{ color: appColors.deactivateText, fontSize: 13 }}
      />

      <View style={styles.inputContainer}>
        <View style={styles.container}>
          <AppText lbl="From" lblStyle={styles.fromToStyle} />

          <SimpleInput
            inputStyle={styles.inputStyle}
            placeholder={props.placeholder}
          />
        </View>

        <View style={styles.container}>
          <AppText lbl="To" lblStyle={styles.fromToStyle} />

          <SimpleInput
            inputStyle={styles.inputStyle}
            placeholder={props.placeholder}
          />
        </View>
      </View>
    </View>
  );
};

export default FromToInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    width: "48%",
    paddingLeft: 5,
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: appColors.secondary,
  },
  fromToStyle: {
    fontSize: 12,
    color: appColors.deactivateText,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 5,
    textAlign: "center",
  },
});
