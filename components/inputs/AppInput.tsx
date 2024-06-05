import React from "react";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";

export interface IAppInput extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
}

const AppInput = (props: IAppInput) => {
  return (
    <TextInput
      value={props.value}
      style={props.inputStyle}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={props.placeholderTextColor}
    />
  );
};

export default AppInput;
