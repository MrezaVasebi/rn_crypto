import { appColors } from "@/appColors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SimpleButton } from "./buttons";
import AppText from "./texts/AppText";

interface INetworkType {
  networkType: "ERC20" | "TRC20";
  onPress: (value: "ERC20" | "TRC20") => void;
}

const NetworkType = (props: INetworkType) => {
  return (
    <View style={styles.networkContainer}>
      <AppText
        lbl="Choose Network: "
        lblStyle={{ color: appColors.deactivateText }}
      />

      <View style={{ flexDirection: "row" }}>
        <SimpleButton
          lblTxt="ERC20"
          btnStyle={{
            ...styles.btnStyle,
            borderWidth: props.networkType === "ERC20" ? 1 : 0,
          }}
          lblStyle={{
            color:
              props.networkType === "ERC20"
                ? appColors.yellow
                : appColors.white,
          }}
          onPress={() => props.onPress("ERC20")}
        />

        <SimpleButton
          lblTxt="TRC20"
          btnStyle={{
            ...styles.btnStyle,
            borderWidth: props.networkType === "TRC20" ? 1 : 0,
          }}
          lblStyle={{
            color:
              props.networkType === "TRC20"
                ? appColors.yellow
                : appColors.white,
          }}
          onPress={() => props.onPress("TRC20")}
        />
      </View>
    </View>
  );
};

export default NetworkType;

const styles = StyleSheet.create({
  networkContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnStyle: {
    height: 40,
    marginRight: 15,
    paddingHorizontal: 5,
    borderStyle: "dashed",
    borderColor: appColors.yellow,
    backgroundColor: appColors.transparent,
  },
});
