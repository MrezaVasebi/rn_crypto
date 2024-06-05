import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { DashboardTransactionType } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";

const DashboardTransactionCart = ({
  data,
}: {
  data: DashboardTransactionType;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.valueContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText lbl={data.date} lblStyle={styles.lblStyle} />

            <AppText
              lbl={data.time}
              lblStyle={{ ...styles.lblStyle, marginLeft: 15 }}
            />
          </View>

          <AppText lbl={data.amount} lblStyle={styles.lblStyle} />
        </View>

        <View
          style={{
            marginTop: 10,
            ...styles.valueContainer,
          }}
        >
          <View
            style={{
              ...styles.circleStyle,
              backgroundColor:
                data.status === "Withdraw" ? appColors.pink : appColors.green,
            }}
          />

          <AppText lbl={data.cardNumber} lblStyle={styles.lblStyle} />
        </View>
      </View>

      <View
        style={{
          backgroundColor:
            data.status === "Withdraw" ? appColors.pink : appColors.green,
          ...styles.coverContainer,
        }}
      />
    </View>
  );
};

export default DashboardTransactionCart;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    backgroundColor: appColors.textColor,
  },
  lblStyle: {
    fontSize: 13,
    color: appColors.placeHolder,
  },
  mainContainer: {
    flex: 1,
    paddingRight: 5,
    paddingVertical: 5,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  coverContainer: {
    left: 0,
    width: 5,
    height: "100%",
    position: "absolute",
  },
});
