import { appColors } from "@/appColors";
import Slider, { SliderProps } from "@react-native-community/slider";
import React from "react";
import { View } from "react-native";
import AppText from "./texts/AppText";

interface IAppSlider {
  range: string;
}

const AppSlider = (props: IAppSlider & SliderProps) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <Slider
        step={25}
        minimumValue={0}
        maximumValue={100}
        onValueChange={props.onValueChange}
        style={{ width: "100%", marginTop: 5 }}
        minimumTrackTintColor={appColors.deactivateText}
        maximumTrackTintColor={appColors.deactivateText}
      />

      <AppText
        lbl={`${props.range}%`}
        lblStyle={{ color: appColors.deactivateText }}
      />
    </View>
  );
};

export default AppSlider;
