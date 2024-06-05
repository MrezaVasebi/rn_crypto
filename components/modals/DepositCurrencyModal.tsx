import { appColors } from "@/appColors";
import { IconButton, ModalBottomButtons, TextButton } from "@/buttons";
import { images } from "@/images";
import { RootModalPage } from "@/modals";
import NetworkType from "@/NetworkType";
import AppText from "@/texts/AppText";
import WalletAddress from "@/WalletAddress";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

interface IDepositCurrencyModal {
  onCloseModal(): void;
}

const DepositCurrencyModal = (props: IDepositCurrencyModal) => {
  const [networkType, setNetworkType] = useState<"ERC20" | "TRC20">("ERC20");

  return (
    <RootModalPage
      title="Deposit to Wallet"
      onCloseModal={props.onCloseModal}
      scrollStyle={styles.scrollStyle}
    >
      <View style={styles.container}>
        <Image
          source={images["qr" as keyof typeof images]}
          style={{ height: 100, width: 100 }}
        />

        <View style={{ width: "100%", marginTop: 15 }}>
          <WalletAddress />

          <View style={styles.tagContainer}>
            <IconButton btnStyle={styles.btnCopyContainer}>
              <AppText lbl="Copy Tag" lblStyle={styles.lblCopyStyle} />

              <Feather name="copy" color={appColors.activateText} size={20} />
            </IconButton>

            <View style={styles.tagValueContainer}>
              <AppText
                lbl="2412421"
                lblStyle={{ color: appColors.activateText }}
              />
            </View>
          </View>

          <View style={styles.yellowBox}>
            <AppText
              lbl="To deposit to this address, be sure to use this tag. Otherwise, the deposited cryptocurrency will not be included in your account."
              lblStyle={styles.lblYellowBox}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <NetworkType
              onPress={(value) => setNetworkType(value)}
              networkType={networkType}
            />
          </View>
        </View>

        <TextButton
          lblTxt="Visual guide"
          btnStyle={{ marginTop: 10 }}
          lblStyle={{ color: appColors.blue, fontSize: 12 }}
        />
      </View>

      <ModalBottomButtons onApply={() => {}} onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default DepositCurrencyModal;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  container: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tagContainer: {
    height: 45,
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderColor: appColors.deactivateText,
  },
  btnCopyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lblCopyStyle: {
    marginRight: 10,
    color: appColors.activateText,
  },
  tagValueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    borderColor: appColors.yellow,
  },
  lblYellowBox: {
    fontSize: 12,
    textAlign: "center",
    color: appColors.yellow,
  },
});
