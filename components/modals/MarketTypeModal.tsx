import { appColors } from "@/appColors";
import { getMarkets } from "@/getMarkets";
import { images } from "@/images";
import RootModalPage from "./RootModalPage";
import AppText from "@/texts/AppText";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IMarketTypeModal {
  onCloseModal(): void;
}

const MarketTypeModal = (props: IMarketTypeModal) => {
  return (
    <RootModalPage
      title="Choose Market"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        {getMarkets().map((el, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              style={styles.itemStyle}
            >
              <Image
                style={styles.iconStyle}
                source={images[el as keyof typeof images]}
              />

              <AppText lbl={el} lblStyle={styles.lblStyle} />
            </TouchableOpacity>
          );
        })}
      </View>
    </RootModalPage>
  );
};

export default MarketTypeModal;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  container: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: appColors.textColor,
  },
  itemStyle: {
    height: 40,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: appColors.deactivateText,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  lblStyle: {
    fontSize: 12,
    color: appColors.deactivateText,
  },
});
