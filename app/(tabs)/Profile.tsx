import { appColors } from "@/appColors";
import { IconButton, SelectingImageButton, SimpleButton } from "@/buttons";
import { BankCart } from "@/carts";
import { images } from "@/images";
import InputWithLabel from "@/inputs/InputWithLabel";
import {
  AddingBankCartModal,
  UploadingIdCardModal,
  UploadingSelfieModal,
} from "@/modals";
import TabRootPage from "@/TabRootPage";
import AppText from "@/texts/AppText";
import { useProfile } from "@/useProfile";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const hooks = useProfile();

  return (
    <TabRootPage contentStyle={{ padding: 20 }}>
      <View style={styles.headerStyle}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImgStyle}
            source={images["profile" as keyof typeof images]}
          />

          <AppText lbl="Mreza Vasebi" lblStyle={styles.lblNameStyle} />
        </View>

        <View style={styles.settingContainer}>
          <IconButton>
            <Image source={images["setting" as keyof typeof images]} />
          </IconButton>

          {/* <Link href={"../Notifications"}>notification</Link> */}

          <IconButton
            btnStyle={{ marginRight: 20 }}
            onPress={() => router.navigate("../Notifications")}
          >
            <Image source={images["notification" as keyof typeof images]} />
          </IconButton>
        </View>
      </View>

      <View style={styles.selectImgContainer}>
        <SelectingImageButton
          msg="Selfie Image"
          status="Uploaded"
          btnStyle={{ width: "48%" }}
          onPress={() => hooks.handleSelfieModal(true)}
        />
        <SelectingImageButton
          msg="ID Image"
          status="InProgress"
          btnStyle={{ width: "48%" }}
          onPress={() => hooks.handleIdCardModal(true)}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => router.navigate("../ReferralCode")}
        style={styles.referralContainer}
      >
        <AppText lbl="Referral code" />

        <AntDesign name="right" size={15} color={appColors.placeHolder} />
      </TouchableOpacity>

      <View style={styles.userInfoContainer}>
        <AppText lbl="User Info" lblStyle={{ fontSize: 20 }} />

        <SimpleButton
          lblTxt="Edit Info"
          btnStyle={styles.editStyle}
          lblStyle={{ color: appColors.yellow }}
        />
      </View>

      <View style={styles.inputContainer}>
        {[
          { lbl: "Name", value: "Mreza" },
          { lbl: "Family Name", value: "Vasebi" },
          { lbl: "IdNumber", value: "00000000000" },
          { lbl: "BirthDate", value: "0000/00/00" },
          { lbl: "Mobile", value: "0932738864" },
          { lbl: "PhoneNumber", value: "09332738864" },
          { lbl: "Email", value: "reza.vaseb@yahoo.com" },
          { lbl: "Address", value: "Tabriz, Iran" },
        ].map((el, index) => {
          return (
            <InputWithLabel
              lbl={el.lbl}
              key={index}
              value={el.value}
              lblStyle={{ opacity: 0.5 }}
              inputStyle={styles.inputStyle}
              containerStyle={{ width: "49%", marginBottom: 10 }}
            />
          );
        })}
      </View>

      <AppText lbl="Bank Info" lblStyle={{ fontSize: 20 }} />

      <View style={styles.cartContainer}>
        <AppText
          lbl="Bank Cards"
          lblStyle={{ opacity: 0.5, marginBottom: 10 }}
        />
        {[
          "6104 3376 2009 7541",
          "6104 3376 2009 7541",
          "6104 3376 2009 7541",
        ].map((el, index) => {
          return <BankCart bankNumber={el} key={index} />;
        })}

        <TouchableOpacity
          style={styles.btnAddingStyle}
          onPress={() => hooks.handleAddingBankCardModal(true)}
        >
          <AntDesign
            size={15}
            name="pluscircle"
            color={appColors.placeHolder}
          />

          <AppText lbl="Adding Back Card" lblStyle={styles.lblAddingStyle} />
        </TouchableOpacity>
      </View>

      {/* modals */}
      {hooks.fields.addingBankCartModal && (
        <AddingBankCartModal
          onCloseModal={() => hooks.handleAddingBankCardModal(false)}
        />
      )}

      {hooks.fields.selfieModal && (
        <UploadingSelfieModal
          onCloseModal={() => hooks.handleSelfieModal(false)}
        />
      )}

      {hooks.fields.idCardModal && (
        <UploadingIdCardModal
          onCloseModal={() => hooks.handleIdCardModal(false)}
        />
      )}
    </TabRootPage>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  avatarContainer: { flexDirection: "row", alignItems: "center" },
  avatarImgStyle: {
    width: 30,
    height: 50,
    resizeMode: "contain",
  },
  lblNameStyle: {
    fontSize: 20,
    marginLeft: 15,
    color: appColors.yellow,
  },
  settingContainer: { alignItems: "center", flexDirection: "row-reverse" },
  selectImgContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  referralContainer: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.viewBackColor,
  },
  userInfoContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editStyle: {
    height: 38,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: appColors.yellow,
    backgroundColor: "transparent",
  },
  inputContainer: {
    flexWrap: "wrap",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyle: {
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    color: appColors.green,
    backgroundColor: "transparent",
    borderColor: appColors.viewBackColor,
  },
  cartContainer: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: appColors.viewBackColor,
  },
  btnAddingStyle: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  lblAddingStyle: {
    fontSize: 13,
    opacity: 0.5,
    marginLeft: 8,
  },
});
