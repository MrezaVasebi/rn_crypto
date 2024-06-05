import { appColors } from "@/appColors";
import React from "react";
import {
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const TabRootPage = (
  props: { contentStyle?: StyleProp<ViewStyle> } & ScrollViewProps
) => {
  return (
    <View style={styles.rootStyle}>
      <ScrollView
        style={props.style}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.containerStyle, props.contentStyle]}
      >
        <StatusBar hidden />
        {props.children}
      </ScrollView>
    </View>
  );
};

export default TabRootPage;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: appColors.textColor,
  },
  style: {},
  containerStyle: {
    flexGrow: 1,
    backgroundColor: appColors.textColor,
  },
});
