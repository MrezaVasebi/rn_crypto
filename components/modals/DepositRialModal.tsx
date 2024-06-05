import { appColors } from "@/appColors";
import { ChooseButton, ModalBottomButtons, TextButton } from "@/buttons";
import SimpleInput from "@/inputs/SimpleInput";
import { RootModalPage } from "@/modals";
import AppText from "@/texts/AppText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IDepositRialModal {
  onCloseModal(): void;
}

const DepositRialModal = (props: IDepositRialModal) => {
  return (
    <RootModalPage
      title="Riyal Deposit"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        <AppText
          lbl="To increase the Riyal balance of your account, you can use a bank card in your name that has already been registered and approved."
          lblStyle={styles.descStyle}
        />

        <View style={styles.yellowBox}>
          <AppText
            lbl="Please pay attention to the following points before depositing money. The customer is responsible for the problems caused by not paying attention to these items."
            lblStyle={{ ...styles.descStyle, color: appColors.yellow }}
          />

          <TextButton
            lblTxt="Visual guide"
            btnStyle={{ marginTop: 10 }}
            lblStyle={{ color: appColors.blue, fontSize: 12 }}
          />
        </View>

        <View>
          <AppText
            lbl="Be sure to pay attention to the address of the bank portal page and enter your bank card details only after making sure that you are present on the Shoprak system sites."
            lblStyle={{ ...styles.descStyle, textAlign: "left" }}
          />

          <AppText
            lbl="On the portal page, make sure that the displayed amount is correct."
            lblStyle={{
              ...styles.descStyle,
              textAlign: "left",
              marginVertical: 10,
            }}
          />
        </View>

        <ChooseButton lbl="Choose your bank card" />

        <View style={styles.inputContainer}>
          <AppText
            lbl="Amount of inventory increase"
            lblStyle={{ color: appColors.green, fontSize: 12 }}
          />

          <SimpleInput
            placeholder="Enter amount"
            inputStyle={styles.inputStyle}
          />
        </View>
      </View>

      <ModalBottomButtons onApply={() => {}} onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default DepositRialModal;

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
  yellowBox: {
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    borderColor: appColors.yellow,
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
    paddingLeft: 5,
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
