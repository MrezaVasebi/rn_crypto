import { appColors } from "@/appColors";
import { IconButton } from "@/buttons";
import { images } from "@/images";
import AppText from "@/texts/AppText";
import { DashboardWalletType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

const DashboardWalletCart = ({ data }: { data: DashboardWalletType }) => {
  return (
    <ImageBackground
      style={{
        ...styles.container,
        width: Dimensions.get("window").width - 60,
      }}
      source={images.backImg[data.name as keyof typeof images.backImg]}
    >
      <View style={styles.headerStyle}>
        <View style={styles.itemStyle}>
          <View style={styles.iconCover}>
            <Image
              style={styles.iconStyle}
              source={images[data.name as keyof typeof images]}
            />
          </View>

          <AppText lbl={data.name} />
        </View>

        <View style={styles.itemStyle}>
          <IconButton btnStyle={styles.btnStyle}>
            <Ionicons name="copy" size={20} color={appColors.white} />
          </IconButton>

          <IconButton btnStyle={{ ...styles.btnStyle, marginLeft: 10 }}>
            <Ionicons
              name="qr-code-outline"
              size={20}
              color={appColors.white}
            />
          </IconButton>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <AppText lbl={data.amount} />
        <AppText lbl={data.address} lblStyle={{ marginTop: 5 }} />
      </View>
    </ImageBackground>
  );
};

export default DashboardWalletCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  iconCover: {
    padding: 3,
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 50,
    borderColor: "white",
  },
  btnStyle: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  bottomContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 10,
    paddingBottom: 10,
    position: "absolute",
  },
});
