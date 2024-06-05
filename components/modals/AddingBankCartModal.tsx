import { ModalBottomButtons } from "@/buttons";
import InputWithLabel from "@/inputs/InputWithLabel";
import RootModalPage from "@/modals/RootModalPage";
import React from "react";
import { StyleSheet } from "react-native";

interface IAddingBankCartModal {
  onCloseModal: () => void;
}

const AddingBankCartModal = (props: IAddingBankCartModal) => {
  return (
    <RootModalPage
      title="Adding Bank card"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <InputWithLabel
        placeholder="Card number"
        lblStyle={styles.lblStyle}
        inputStyle={styles.inputStyle}
        lbl="Please enter bank card number"
        containerStyle={styles.containerStyle}
      />

      <ModalBottomButtons onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default AddingBankCartModal;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerStyle: {
    marginTop: 20,
  },
  inputStyle: {
    textAlign: "center",
  },
  lblStyle: {
    opacity: 0.5,
  },
});
