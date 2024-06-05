import { appColors } from "@/appColors";
import { CheckBox, ModalBottomButtons, TextButton } from "@/buttons";
import SimpleInput from "@/inputs/SimpleInput";
import { RootModalPage } from "@/modals";
import NetworkType from "@/NetworkType";
import AppText from "@/texts/AppText";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface IWithdrawCurrencyModal {
  onCloseModal(): void;
}

const WithdrawCurrencyModal = (props: IWithdrawCurrencyModal) => {
  const [networkType, setNetworkType] = useState<"ERC20" | "TRC20">("ERC20");
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <RootModalPage
      title="Withdraw from Wallet"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        <AppText
          lbl="In order to transfer to another wallet, enter the currency amount and the address of the destination wallet. The currency type of your wallet and the destination wallet must be the same."
          lblStyle={{ ...styles.descStyle, marginBottom: 10 }}
        />

        <AppText
          lbl="Please note that if you enter the wrong address or the type of cryptocurrency is different, the transfer process will not be done correctly and the transferred amount will not be returned."
          lblStyle={styles.descStyle}
        />

        <TextButton
          lblTxt="Visual guide"
          btnStyle={{ marginTop: 10 }}
          lblStyle={{ color: appColors.blue, fontSize: 12 }}
        />

        <SimpleInput
          placeholder="Amount of currency"
          inputStyle={{
            height: 100,
            marginBottom: 10,
            ...styles.inputStyle,
          }}
        />

        <SimpleInput
          placeholder="Destination wallet address"
          inputStyle={{
            height: 50,
            marginBottom: 10,
            ...styles.inputStyle,
          }}
        />
      </View>

      <NetworkType
        networkType={networkType}
        onPress={(value: "ERC20" | "TRC20") => setNetworkType(value)}
      />

      <CheckBox
        isSelected={isSelected}
        btnStyle={{ marginTop: 10 }}
        onPress={() => setIsSelected(!isSelected)}
        lbl="I am sure that the address is correct and the currency of the bags is the same."
      />

      <ModalBottomButtons onApply={() => {}} onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default WithdrawCurrencyModal;

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
  descStyle: {
    fontSize: 12,
    textAlign: "center",
    color: appColors.deactivateText,
  },
  inputStyle: {
    fontSize: 16,
    width: "100%",
    marginTop: 10,
    textAlign: "center",
  },
});
