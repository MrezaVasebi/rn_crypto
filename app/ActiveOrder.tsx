import { appColors } from "@/appColors";
import { BackButton } from "@/buttons";
import { ActiveOrderCart } from "@/carts";
import { activeOrderList } from "@/dummy_data";
import TableRow from "@/TableRow";
import TabRootPage from "@/TabRootPage";
import AppText from "@/texts/AppText";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const ActiveOrder = () => {
  return (
    <TabRootPage contentStyle={{ padding: 20 }}>
      <BackButton onPress={() => router.back()} />

      <AppText lbl="Active Order" lblStyle={styles.lblStyle} />

      <View style={styles.caption}>
        {["Time", "Currency", "Amount", "Price", "Fill", ""].map(
          (el, index) => {
            return (
              <TableRow
                lbl={el}
                key={index}
                style={{
                  color: appColors.deactivateText,
                }}
              />
            );
          }
        )}
      </View>

      <View style={{ marginTop: 10 }}>
        {activeOrderList.map((el, index) => {
          return <ActiveOrderCart data={el} key={index} />;
        })}
      </View>
    </TabRootPage>
  );
};

export default ActiveOrder;

const styles = StyleSheet.create({
  caption: {
    paddingLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  lblStyle: {
    fontSize: 17,
    marginVertical: 30,
  },
});
