import { appColors } from "@/appColors";
import AppSlider from "@/AppSlider";
import { SimpleButton } from "@/buttons";
import { MarketInput } from "@/inputs";
import MarketCoverBox from "@/MarketCoverBox";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const LimitOrder = ({ isBuy }: { isBuy: boolean }) => {
  const [range, setRange] = useState<number>(0);

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <MarketInput lbl="Amount" unit="BTC" placeholder="0.232" />

      <MarketCoverBox
        value="200.325.250"
        lbl={`Lowest ${isBuy ? "Buy" : "Sell"} Offers`}
      />

      <MarketInput lbl="Price" unit="IRT" placeholder="126.320.365" />

      <AppSlider
        range={range.toString()}
        onValueChange={(value) => setRange(value)}
      />

      <View style={styles.btnContainer}>
        <SimpleButton
          onPress={() => {}}
          btnStyle={{
            width: 65,
            backgroundColor: isBuy ? appColors.green : appColors.pink,
          }}
          lblTxt={isBuy ? "Buy" : "Sell"}
          lblStyle={{ color: appColors.textColor }}
        />
      </View>
    </View>
  );
};

export default LimitOrder;

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
});
