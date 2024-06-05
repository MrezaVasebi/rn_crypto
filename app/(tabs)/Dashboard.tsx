import AddingWallet from "@/AddingWallet";
import { appColors } from "@/appColors";
import {
  ChartCart,
  DashboardTransactionCart,
  DashboardWalletCart,
} from "@/carts";
import {
  chartDataList,
  dashboardTransactionList,
  dashboardWalletList,
} from "@/dummy_data";
import TabRootPage from "@/TabRootPage";
import AppText from "@/texts/AppText";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Dashboard = () => {
  return (
    <TabRootPage contentStyle={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        {/* top */}
        <View style={{ ...styles.bottomContainer, height: 250 }}>
          <AddingWallet />

          <View style={styles.currencyContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {dashboardWalletList.map((el, index) => {
                return <DashboardWalletCart key={index} data={el} />;
              })}
            </ScrollView>
          </View>
        </View>

        {/* body */}
        <View style={{ ...styles.bottomContainer, marginTop: 10, height: 350 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {chartDataList.map((el, index) => {
              return (
                <ChartCart
                  data={el}
                  key={index}
                  index={index}
                  length={chartDataList.length}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* bottom */}
        <View style={{ ...styles.bottomContainer, marginTop: 10 }}>
          <AppText lbl="Latest Transactions" lblStyle={styles.bottomHeader} />

          {dashboardTransactionList.map((el, index) => {
            return <DashboardTransactionCart key={index} data={el} />;
          })}
        </View>
      </ScrollView>
    </TabRootPage>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.textColor,
  },
  scrollStyle: {
    flexGrow: 1,
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  currencyContainer: {
    flex: 1,
    paddingTop: 5,
  },
  bottomContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: appColors.viewBackColor,
  },
  bottomHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
});
