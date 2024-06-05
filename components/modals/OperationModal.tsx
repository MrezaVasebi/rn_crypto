import { appColors } from "@/appColors";
import { images } from "@/images";
import RootModalPage from "./RootModalPage";
import AppText from "@/texts/AppText";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IOperationModal {
  onCloseModal(): void;
}

const OperationModal = (props: IOperationModal) => {
  return (
    <RootModalPage
      title="Choose Operation"
      scrollStyle={styles.scrollStyle}
      onCloseModal={props.onCloseModal}
    >
      <View style={styles.container}>
        {["Withdraw", "Deposit"].map((el, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              style={styles.itemStyle}
            >
              <Image
                resizeMode="contain"
                style={styles.iconStyle}
                source={images[el.toLowerCase() as keyof typeof images]}
              />

              <AppText
                lbl={el}
                lblStyle={{
                  fontSize: 12,
                  color: el === "Withdraw" ? appColors.pink : appColors.green,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </RootModalPage>
  );
};

export default OperationModal;

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
    marginRight: 10,
  },
});
