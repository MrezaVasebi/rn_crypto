import { appColors } from "@/appColors";
import { ModalBottomButtons } from "@/buttons";
import RootModalPage from "./RootModalPage";
import AppText from "@/texts/AppText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface IUploadingSelfieModal {
  onCloseModal: () => void;
}

const UploadingSelfieModal = (props: IUploadingSelfieModal) => {
  return (
    <RootModalPage
      title="Uploading Selfie"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <TouchableOpacity activeOpacity={0.5} style={styles.imgContainer}>
        <Ionicons name="camera" size={35} color={appColors.placeHolder} />

        <AppText lbl="Selecting Image" lblStyle={styles.imgTextStyle} />
      </TouchableOpacity>

      <ModalBottomButtons onCancel={props.onCloseModal} />
    </RootModalPage>
  );
};

export default UploadingSelfieModal;

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
  imgContainer: {
    height: 150,
    width: "100%",
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.textColor,
  },
  imgTextStyle: {
    opacity: 0.5,
    fontSize: 13,
    marginTop: 10,
  },
});
