import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

const IconButton = (
  props: { btnStyle?: StyleProp<ViewStyle> } & TouchableOpacityProps
) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[styles.btnStyle, props.btnStyle]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btnStyle: {},
});
