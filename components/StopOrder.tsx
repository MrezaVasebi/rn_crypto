import { appColors } from "@/appColors";
import AppSlider from "@/AppSlider";
import { SimpleButton } from "@/buttons";
import { MarketInput } from "@/inputs";
import MarketCoverBox from "@/MarketCoverBox";
import AppText from "@/texts/AppText";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const StopOrder = ({ isBuy }: { isBuy: boolean }) => {
  const [range, setRange] = useState<number>(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <AppText lbl="Stop" />
      </View>

      <MarketInput lbl="Amount" unit="BTC" placeholder="0.213" />

      <View style={styles.descContainer}>
        <AppText lbl="Amount & Price" />
      </View>

      <MarketInput lbl="Amount" unit="BTC" placeholder="0.213" />

      <MarketCoverBox
        value="345.320.365"
        lbl={`Lowest ${isBuy ? "Buy" : "Sell"} Offers`}
      />

      <MarketInput lbl="Price" unit="IRT" placeholder="0.213" />

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

export default StopOrder;

const styles = StyleSheet.create({
  descContainer: { alignItems: "center", marginTop: 20, marginBottom: 10 },
  btnContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
});
