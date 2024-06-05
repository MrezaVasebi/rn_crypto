import { appColors } from "@/appColors";
import { SimpleButton } from "@/buttons";
import { MarketCart, MarketLatestTransactionCart } from "@/carts";
import { latestTransactionList, marketCartList } from "@/dummy_data";
import LimitOrder from "@/LimitOrder";
import { ChooseCurrenciesModal, MarketTypeModal } from "@/modals";
import OcoOrder from "@/OcoOrder";
import StopOrder from "@/StopOrder";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const Market = () => {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  const [isMarket, setIsMarket] = useState<boolean>(true);
  const [isOpenPanel, setIsOpenPanel] = useState<boolean>(true);
  const [tabBottom, setTabBottom] = useState<"Oco" | "Limit" | "Stop">("Oco");

  // modals
  const [chooseCurrenciesModal, setChooseCurrenciesModal] =
    useState<boolean>(false);
  const [marketTypeModal, setMarketTypeModal] = useState<boolean>(false);

  const btnMarketCurrency = (props: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={props.onPress}
        style={styles.marketContainerStyle}
      >
        <View style={styles.marketLblContainer}>
          <AppText lbl={`${props.lbl}: `} lblStyle={styles.marketLblStyle} />
          <AppText lbl={`${props.ans}`} lblStyle={styles.marketLblStyle} />
        </View>

        <AntDesign
          name="down"
          size={13}
          style={{ marginLeft: 10 }}
          color={appColors.deactivateText}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{ paddingVertical: 8 }}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.hederContainerStyle}
        >
          {btnMarketCurrency({
            ans: "Rial",
            lbl: "Market",
            onPress: () => setMarketTypeModal(true),
          })}

          {btnMarketCurrency({
            ans: "BTC",
            lbl: "Currency",
            onPress: () => setChooseCurrenciesModal(true),
          })}

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.navigate("../ActiveOrder")}
            style={[
              styles.marketContainerStyle,
              {
                borderColor: appColors.yellow,
              },
            ]}
          >
            <AppText
              lbl="Active Order"
              lblStyle={[styles.marketLblStyle, { color: appColors.yellow }]}
            />

            <AntDesign
              size={13}
              name="right"
              color={appColors.yellow}
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>

          {/* <Link
            href={"/auth/subPages/ActiveOrder"}
            style={[
              styles.marketContainerStyle,
              { borderColor: appColors.yellow },
            ]}
          >
            <AppText
              lbl="Active Order"
              lblStyle={[styles.marketLblStyle, { color: appColors.yellow }]}
            />

            <AntDesign
              size={13}
              name="right"
              color={appColors.yellow}
              style={{ marginLeft: 10 }}
            />
          </Link> */}
        </ScrollView>
      </View>

      {/* body */}
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            ...styles.scrollStyle,
          }}
        >
          <View style={styles.tableStyle}>
            <MarketCart data={marketCartList} isBuy />
            <MarketCart data={marketCartList} isBuy={false} />
          </View>

          <MarketLatestTransactionCart
            isMarket={isMarket}
            data={latestTransactionList}
            onPress={(value: string) => {
              if (value === "market") setIsMarket(true);
              else setIsMarket(false);
            }}
          />
        </ScrollView>
      </View>

      {/* bottom */}
      <View
        style={{
          ...styles.bottomContainer,
          ...{ height: isOpenPanel ? "50%" : 60 },
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.bottomScroll}
        >
          <SimpleButton
            btnStyle={styles.pnlBtn}
            onPress={() => setIsOpenPanel(!isOpenPanel)}
            lblStyle={{ color: appColors.deactivateText }}
            lblTxt={isOpenPanel ? "Close Panel" : "Open Panel"}
          />

          <View style={styles.bottomHeader}>
            <View
              style={{
                ...styles.switchBtn,
                borderColor: isBuy ? appColors.green : appColors.pink,
              }}
            >
              <SimpleButton
                lblTxt="Sell"
                lblStyle={{
                  color: !isBuy ? appColors.textColor : appColors.pink,
                }}
                btnStyle={{
                  ...styles.sellBtn,
                  marginRight: 5,
                  backgroundColor: !isBuy
                    ? appColors.pink
                    : appColors.transparent,
                }}
                onPress={() => setIsBuy(false)}
              />

              <SimpleButton
                lblTxt="Buy"
                btnStyle={{
                  ...styles.sellBtn,
                  backgroundColor: isBuy
                    ? appColors.green
                    : appColors.transparent,
                }}
                lblStyle={{
                  color: isBuy ? appColors.textColor : appColors.green,
                }}
                onPress={() => setIsBuy(true)}
              />
            </View>

            <AppText
              lbl="Balance: 2000$"
              lblStyle={{ color: appColors.deactivateText }}
            />
          </View>

          <View style={styles.bottomTabContainer}>
            <SimpleButton
              lblTxt="OCO"
              btnStyle={{
                ...styles.bottomTabStyle,
                ...{
                  borderBottomWidth: tabBottom === "Oco" ? 3 : 0,
                },
              }}
              lblStyle={{
                color:
                  tabBottom === "Oco"
                    ? appColors.activateText
                    : appColors.deactivateText,
              }}
              onPress={() => setTabBottom("Oco")}
            />

            <SimpleButton
              lblTxt="Stop Order"
              btnStyle={{
                ...styles.bottomTabStyle,
                ...{
                  borderBottomWidth: tabBottom === "Stop" ? 3 : 0,
                },
              }}
              lblStyle={{
                color:
                  tabBottom === "Stop"
                    ? appColors.activateText
                    : appColors.deactivateText,
              }}
              onPress={() => setTabBottom("Stop")}
            />

            <SimpleButton
              lblTxt="Limit Order"
              btnStyle={{
                ...styles.bottomTabStyle,
                ...{
                  borderBottomWidth: tabBottom === "Limit" ? 3 : 0,
                },
              }}
              lblStyle={{
                color:
                  tabBottom === "Limit"
                    ? appColors.activateText
                    : appColors.deactivateText,
              }}
              onPress={() => setTabBottom("Limit")}
            />
          </View>

          {(() => {
            if (tabBottom === "Limit") return <LimitOrder isBuy={isBuy} />;
            if (tabBottom === "Stop") return <StopOrder isBuy={isBuy} />;
            if (tabBottom === "Oco") return <OcoOrder isBuy={isBuy} />;
          })()}
        </ScrollView>
      </View>

      {/* modals */}
      {chooseCurrenciesModal && (
        <ChooseCurrenciesModal
          onCloseModal={() => setChooseCurrenciesModal(false)}
        />
      )}

      {marketTypeModal && (
        <MarketTypeModal onCloseModal={() => setMarketTypeModal(false)} />
      )}
    </View>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 35, backgroundColor: appColors.textColor },
  hederContainerStyle: {
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
  marketContainerStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    borderColor: appColors.border,
    justifyContent: "space-between",
  },
  marketLblContainer: { flexDirection: "row", alignItems: "center" },
  marketLblStyle: { color: appColors.border, fontSize: 12 },
  scrollStyle: { paddingTop: 15, padding: 20, flexGrow: 1 },
  tableStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: appColors.secondary,
  },
  bottomScroll: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 0,
  },
  pnlBtn: {
    width: 100,
    height: 35,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: appColors.deactivateText,
    backgroundColor: appColors.transparent,
  },
  bottomHeader: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  switchBtn: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sellBtn: { width: 50, height: 40 },
  bottomTabContainer: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-evenly",
    borderColor: appColors.deactivateText,
  },
  bottomTabStyle: {
    bottom: -1,
    borderRadius: 0,
    borderBottomColor: appColors.yellow,
    backgroundColor: appColors.transparent,
  },
});
