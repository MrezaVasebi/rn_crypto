import { appColors } from "@/appColors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface IRootScreen extends ViewProps {
  rootStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthRootPage = (props: IRootScreen) => {
  return (
    <View style={[styles.rootStyle, props.rootStyle]}>
      <StatusBar
        barStyle={"light-content"}
        // backgroundColor={appColors.textColor}
      />

      <LinearGradient
        colors={[appColors.primary, appColors.secondary]}
        style={[
          {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          },
          props.containerStyle,
        ]}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default AuthRootPage;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
});
