import { appColors } from "@/appColors";
import { ChooseButton, ModalBottomButtons, TextButton } from "@/buttons";
import SimpleInput from "@/inputs/SimpleInput";
import { RootModalPage } from "@/modals";
import AppText from "@/texts/AppText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IWithdrawRialModal {
  onCloseModal(): void;
}

const WithdrawRialModal = (props: IWithdrawRialModal) => {
  return (
    <RootModalPage
      title="Withdrawal Request"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        <AppText
          lblStyle={styles.descStyle}
          lbl="To request money, choose the account to which you want to withdraw money."
        />

        <TextButton
          lblTxt="Visual guide"
          btnStyle={{ marginVertical: 15 }}
          lblStyle={{ color: appColors.blue, fontSize: 12 }}
        />

        <TextButton
          lblTxt="Withdrawal schedule"
          btnStyle={{ marginBottom: 10 }}
          lblStyle={{ color: appColors.blue, fontSize: 12 }}
        />

        <ChooseButton lbl="Choose your bank account" />

        <View style={styles.inputContainer}>
          <TextButton
            lblTxt="Maximum inventory"
            lblStyle={{ color: appColors.blue, fontSize: 12 }}
            btnStyle={{ backgroundColor: appColors.transparent }}
          />

          <SimpleInput
            placeholder="Withdraw amount"
            inputStyle={styles.inputStyle}
            placeholderTextColor={appColors.border}
          />
        </View>

        <View style={{ width: "100%", marginTop: 10 }}>
          <AppText
            lbl="Withdrawal balance: 425.320.020"
            lblStyle={{ color: appColors.deactivateText, fontSize: 12 }}
          />
        </View>
      </View>

      <ModalBottomButtons onApply={() => {}} onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default WithdrawRialModal;

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
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    borderColor: appColors.green,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 5,
    textAlign: "center",
    backgroundColor: appColors.transparent,
  },
});
