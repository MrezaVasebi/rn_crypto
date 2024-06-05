import React from "react";
import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import AppText from "./texts/AppText";

const TableRow = ({
  lbl,
  style,
}: {
  lbl: string;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={styles.tableHeaderStyle}>
      <AppText
        lbl={lbl}
        lblStyle={[{ fontSize: 13 }, styles.lblStyle, style]}
      />
    </View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  tableHeaderStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lblStyle: {
    textAlign: "center",
  },
});
