import AppText from "@/texts/AppText";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { IAppInput } from "./AppInput";
import SimpleInput from "./SimpleInput";

interface PropsType extends IAppInput {
  lbl: string;
  lblStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputWithLabel = (props: PropsType) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <AppText lbl={props.lbl} lblStyle={[styles.lblStyle, props.lblStyle]} />

      <SimpleInput
        value={props.value}
        inputStyle={props.inputStyle}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  containerStyle: {},
  lblStyle: {
    fontSize: 13,
    marginBottom: 8,
  },
});
