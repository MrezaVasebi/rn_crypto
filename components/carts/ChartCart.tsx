import { appColors } from "@/appColors";
import { images } from "@/images";
import AppText from "@/texts/AppText";
import { ChartType } from "@/types";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const ChartCart = ({
  data,
  length,
  index,
}: {
  data: ChartType;
  length: number;
  index: number;
}) => {
  const chartData = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
  ];

  const itemWidth = 250;
  const chartWidth = itemWidth - 80;

  return (
    <View
      style={{
        ...styles.container,
        marginRight: index === length - 1 ? 0 : 15,
        width: itemWidth,
      }}
    >
      <View style={styles.headerStyle}>
        <Image
          style={styles.iconStyle}
          source={images[data.name as keyof typeof images]}
        />

        <AppText lbl={data.name} />
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          height={180}
          thickness={2}
          data={chartData}
          hideRules={false}
          width={chartWidth}
          initialSpacing={10}
          color1={data.color}
          hideYAxisText={false}
          hideDataPoints={false}
          showVerticalLines={false}
        />
      </View>

      <AppText lbl={data.amount} lblStyle={{ fontSize: 12 }} />

      <AppText
        lbl={data.upDown}
        lblStyle={{
          fontSize: 12,
          marginTop: 5,
          color: data.upDown.startsWith("-") ? appColors.pink : appColors.green,
        }}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.buySellContainer}>
          <AppText lbl="Best Sell" lblStyle={styles.lblSellBuy} />
          <AppText lbl={data.bestSell} lblStyle={styles.lblSellBuy} />
        </View>

        <View style={{ ...styles.buySellContainer, marginTop: 5 }}>
          <AppText lbl="Best Buy" lblStyle={styles.lblSellBuy} />
          <AppText lbl={data.bestBuy} lblStyle={styles.lblSellBuy} />
        </View>
      </View>
    </View>
  );
};

export default ChartCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",

    borderRadius: 10,
    backgroundColor: appColors.primary,
  },
  headerStyle: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buySellContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainer: {
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: appColors.secondary,
  },
  lblSellBuy: {
    fontSize: 12,
    color: appColors.placeHolder,
  },
  chartContainer: {
    height: 200,
    paddingVertical: 3,
  },
});
