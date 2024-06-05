import { appColors } from "@/appColors";
import TextButton from "@/buttons/TextButton";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IAuthHeader {
  tabName: "login" | "register";
  handleTabName: (value: "register" | "login") => void;
}

const AuthHeader = ({ tabName, handleTabName }: IAuthHeader) => {
  return (
    <View style={styles.container}>
      <TextButton
        lblTxt="SignUp"
        btnStyle={{
          marginLeft: 25,
          borderBottomWidth: tabName === "register" ? 2 : 0,
          opacity: tabName === "register" ? 1 : 0.4,
          ...styles.btnStyle,
        }}
        onPress={() => handleTabName("register")}
      />

      <TextButton
        lblTxt="Login"
        btnStyle={{
          borderBottomWidth: tabName === "login" ? 2 : 0,
          opacity: tabName === "login" ? 1 : 0.4,
          ...styles.btnStyle,
        }}
        onPress={() => handleTabName("login")}
      />
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    borderColor: appColors.border,
  },
  btnStyle: {
    height: 35,
    borderColor: appColors.yellow,
  },
});
