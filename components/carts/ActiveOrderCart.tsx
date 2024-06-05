import { appColors } from "@/appColors";
import { images } from "@/images";
import AppText from "@/texts/AppText";
import { ActiveOrderType } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TableRow } from "..";

const ActiveOrderCart = ({ data }: { data: ActiveOrderType }) => {
  const fontSize = 12;

  return (
    <View style={styles.container}>
      <View style={[styles.closeContainer, {}]}>
        <AppText lbl={data.date} lblStyle={{ fontSize, marginBottom: 3 }} />
        <AppText lbl={data.time} lblStyle={{ fontSize }} />
      </View>

      <View style={styles.closeContainer}>
        <Image
          source={images[data?.currency as keyof typeof images]}
          style={styles.iconStyle}
        />

        <AppText lbl={data?.currency} lblStyle={{ fontSize }} />
      </View>

      <TableRow lbl={data.amount} style={{ fontSize }} />
      <TableRow lbl={data.price} style={{ fontSize }} />

      <View style={[styles.closeContainer, {}]}>
        <View style={styles.percentageCircle}>
          <AppText
            lbl={`${data.fill}%`}
            lblStyle={{ color: appColors.blue, fontSize }}
          />
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.5} style={styles.closeContainer}>
        <View style={styles.closeCircle}>
          <AntDesign name="close" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          ...styles.coverContainer,
          backgroundColor:
            data.status === "Buy" ? appColors.pink : appColors.green,
        }}
      >
        <AppText lbl={data.status} lblStyle={styles.coverLbl} />
      </View>
    </View>
  );
};

export default ActiveOrderCart;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 25,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: appColors.primary,
  },
  iconStyle: {
    height: 20,
    width: 20,
    marginBottom: 5,
  },
  closeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  percentageCircle: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.blue,
    backgroundColor: appColors.secondary,
  },
  closeCircle: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: appColors.pink,
  },
  coverContainer: {
    height: "100%",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
  coverLbl: {
    fontSize: 11,
    color: appColors.secondary,
    transform: [{ rotate: "90deg" }],
  },
});
