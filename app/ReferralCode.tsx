import { appColors } from "@/appColors";
import { BackButton, SimpleButton } from "@/buttons";
import ReferralCodeCart from "@/carts/ReferralCodeCart";
import InputWithLabel from "@/inputs/InputWithLabel";
import TableRow from "@/TableRow";
import TabRootPage from "@/TabRootPage";
import AppText from "@/texts/AppText";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const ReferralCode = () => {
  let nowDate = new Date().toLocaleDateString();

  return (
    <TabRootPage contentStyle={styles.rootStyle}>
      <BackButton onPress={() => router.back()} />

      <InputWithLabel
        onChangeText={() => {}}
        lbl="Enter Referral Code"
        placeholder="Referral Code"
        containerStyle={{ marginTop: 20, marginBottom: 10 }}
      />

      <SimpleButton lblTxt="Apply" btnStyle={{ marginBottom: 20 }} />

      <AppText lbl="Your Referral Code" lblStyle={{ fontSize: 20 }} />

      <View style={{ marginVertical: 20 }}>
        <ReferralCodeCart msg="M R E Z A" />

        <ReferralCodeCart
          msg="mreza.vaseb@yahoo.com"
          containerStyle={{ marginTop: 15 }}
        />
      </View>

      <View style={styles.amountStyle}>
        <AppText lbl="Total Users: 5" lblStyle={{ fontSize: 13 }} />

        <AppText
          lbl="Total Incomes: 200.000$"
          lblStyle={{ marginTop: 10, fontSize: 13 }}
        />
      </View>

      <View style={styles.incomeContainer}>
        <AppText lbl="Income Details" lblStyle={{ fontSize: 20 }} />

        <View style={styles.tableContainer}>
          <TableRow lbl="Amount" />
          <TableRow lbl="Date" />
        </View>

        {[
          { date: nowDate, amount: "20000" },
          { date: nowDate, amount: "20000" },
          { date: nowDate, amount: "20000" },
          { date: nowDate, amount: "20000" },
        ].map((el, index) => {
          return (
            <View key={index} style={styles.tableRowContainer}>
              <TableRow lbl={el.date.toString()} />
              <TableRow lbl={el.amount} />
            </View>
          );
        })}
      </View>
    </TabRootPage>
  );
};

export default ReferralCode;

const styles = StyleSheet.create({
  rootStyle: {
    padding: 20,
  },
  backStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountStyle: {
    padding: 10,
    backgroundColor: appColors.primary,
  },
  incomeContainer: {
    padding: 10,
    marginTop: 20,
    backgroundColor: appColors.primary,
  },
  tableContainer: {
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    backgroundColor: appColors.secondary,
  },
  tableRowContainer: {
    marginBottom: 10,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: appColors.viewBackColor,
  },
  tableHeaderStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
