import { appColors } from "@/appColors";
import { ModalBottomButtons } from "@/buttons";
import { getCryptoCurrencies } from "@/getCryptoCurrencies";
import { images } from "@/images";
import { RootModalPage } from "@/modals";
import NetworkType from "@/NetworkType";
import AppText from "@/texts/AppText";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IAddingWalletModal {
  onCloseModal(): void;
}

const AddingWalletModal = (props: IAddingWalletModal) => {
  const [networkType, setNetworkType] = useState<"ERC20" | "TRC20">("ERC20");

  return (
    <RootModalPage
      title="Adding Wallet"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        {getCryptoCurrencies().map((el, index) => {
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

              <AppText lbl={el} lblStyle={styles.lblCurrency} />
            </TouchableOpacity>
          );
        })}
      </View>

      <NetworkType
        networkType={networkType}
        onPress={(value: "ERC20" | "TRC20") => setNetworkType(value)}
      />

      <ModalBottomButtons onApply={() => {}} onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default AddingWalletModal;

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
  lblCurrency: {
    fontSize: 12,
    color: appColors.deactivateText,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
