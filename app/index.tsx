import { appColors } from "@/appColors";
import AuthRootPage from "@/AuthRootPage";
import { SimpleButton } from "@/buttons";
import TextButton from "@/buttons/TextButton";
import { AuthHeader } from "@/headers";
import InputWithLabel from "@/inputs/InputWithLabel";
import SimpleInput from "@/inputs/SimpleInput";
import AppText from "@/texts/AppText";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const AuthPage = () => {
  const [steps, setSteps] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [tabName, setTabName] = useState<"login" | "register">("login");

  const handleTabName = (tabName: "login" | "register") => {
    setTabName(tabName);
  };

  const handleSteps = () => {
    if (steps === 0) {
      return (
        <View style={styles.mainStyle}>
          {tabName === "login" ? (
            <>
              <AppText
                lblStyle={styles.descStyle}
                lbl="For login, please enter your phone number to send verification code, or if you have an account SignUp."
              />
            </>
          ) : (
            <>
              <AppText
                lbl="Please enter your phone number to send verification code"
                lblStyle={styles.descStyle}
              />
            </>
          )}

          <SimpleInput
            placeholder="0933 *** ****"
            inputStyle={{ ...styles.inputStyle, textAlign: "center" }}
            onChangeText={(value: string) => setPhoneNumber(value)}
          />

          <SimpleButton
            lblTxt="Sending Code"
            btnStyle={styles.btnStyle}
            onPress={() => {
              setSteps((pre) => pre + 1);
            }}
          />

          <TextButton
            lblTxt={
              tabName === "login"
                ? "Have no account! SignUp."
                : "Have an account. Login."
            }
            lblStyle={styles.btnTxtStyle}
            onPress={() =>
              setTabName(tabName === "login" ? "register" : "login")
            }
          />
        </View>
      );
    } else if (steps === 1) {
      return (
        <View style={styles.mainStyle}>
          <AppText
            lbl={`Entered phone number ${phoneNumber}`}
            lblStyle={{ opacity: 0.5, fontSize: 13 }}
          />

          <SimpleInput
            placeholder="Phone Number"
            onChangeText={(value: string) => {}}
            inputStyle={{ ...styles.inputStyle, textAlign: "center" }}
          />

          <SimpleButton
            lblTxt="Verify Code"
            btnStyle={styles.btnStyle}
            onPress={() => setSteps((pre) => pre + 1)}
          />

          <TextButton
            lblStyle={{ ...styles.btnTxtStyle }}
            lblTxt={`Sending again after 60 seconds...`}
          />

          <TextButton
            lblStyle={{
              ...styles.btnTxtStyle,
              marginTop: 10,
            }}
            lblTxt={"Edit phone number"}
            onPress={() => setSteps((pre) => pre - 1)}
          />
        </View>
      );
    } else if (steps === 2) {
      if (tabName === "login") {
        return (
          <View style={styles.mainStyle}>
            <InputWithLabel
              secureTextEntry
              placeholder="Password"
              onChangeText={() => {}}
              lblStyle={{ opacity: 0.5 }}
              containerStyle={styles.pasStyle}
              lbl="Please enter your password"
              inputStyle={{ ...styles.inputStyle }}
            />

            <SimpleButton
              lblTxt="Ok"
              btnStyle={styles.btnStyle}
              onPress={() => router.navigate("(tabs)/Dashboard")}
            />

            <TextButton
              lblTxt="Forget your password."
              lblStyle={styles.btnTxtStyle}
            />
          </View>
        );
      } else if (tabName === "register") {
        return (
          <View style={styles.mainStyle}>
            <AppText
              lbl="Please fill your info"
              lblStyle={{ opacity: 0.5, fontSize: 13 }}
            />

            <View style={styles.containerStyle}>
              {["Family name", "Name"].map((el, index) => {
                return (
                  <SimpleInput
                    key={index}
                    placeholder={el}
                    inputStyle={{ width: "48%" }}
                  />
                );
              })}
            </View>

            {["ID", "Email", "Password", "Confirm password"].map(
              (el, index) => {
                return (
                  <SimpleInput
                    key={index}
                    placeholder={el}
                    inputStyle={{ ...styles.inputStyle }}
                  />
                );
              }
            )}

            <SimpleButton
              lblTxt="Ok"
              onPress={() => router.navigate("(tabs)/Dashboard")}
              btnStyle={{ ...styles.btnStyle, marginTop: 15 }}
            />

            {/* <Link href={"(tabs)/Dashboard"}> dashboard</Link> */}
          </View>
        );
      }
    }
  };

  return (
    <AuthRootPage>
      <View style={{ flex: 1, zIndex: 1 }}>
        <AuthHeader tabName={tabName} handleTabName={handleTabName} />

        <View style={styles.titleStyle}>
          <AppText
            lblStyle={{ fontSize: 20 }}
            lbl={tabName === "login" ? "Login" : "SignUp"}
          />
        </View>

        {handleSteps()}
      </View>

      <View style={styles.backImg}>
        <Image source={require("../assets/images/png/Group1234.png")} />
      </View>
    </AuthRootPage>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  mainStyle: {
    padding: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  descStyle: {
    fontSize: 13,
    opacity: 0.5,
    marginTop: 10,
    lineHeight: 20,
    textAlign: "center",
  },
  inputStyle: {
    width: "100%",
    marginVertical: 10,
    textAlign: "center",
  },
  btnStyle: {
    width: "100%",
    marginBottom: 20,
  },
  btnTxtStyle: {
    fontSize: 11,
    color: appColors.yellow,
  },
  backImg: {
    left: -40,
    bottom: -60,
    position: "absolute",
  },
  containerStyle: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  pasStyle: {
    width: "100%",
    alignItems: "center",
  },
});
