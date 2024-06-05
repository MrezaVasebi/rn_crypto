import AddingWallet from "@/AddingWallet";
import { appColors } from "@/appColors";
import { IconButton } from "@/buttons";
import { WalletTransactionCart } from "@/carts";
import { walletTransactionLists } from "@/dummy_data";
import { getCryptoCurrencies } from "@/getCryptoCurrencies";
import { images } from "@/images";
import {
  AddingWalletModal,
  DepositCurrencyModal,
  DepositRialModal,
  MarketTypeModal,
  OperationModal,
  WithdrawRialModal,
} from "@/modals";
import WithdrawCurrencyModal from "@/modals/WithdrawCurrencyModal";
import TableRow from "@/TableRow";
import AppText from "@/texts/AppText";
import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const Wallet = () => {
  // modals
  const [marketTypeModal, setMarketTypeModal] = useState<boolean>(false);
  const [addingWalletModal, setAddingWalletModal] = useState<boolean>(false);
  const [operationModal, setOperationModal] = useState<boolean>(false);
  const [withdrawRialModal, setWithdrawRialModal] = useState<boolean>(false);
  const [depositRialModal, setDepositRialModal] = useState<boolean>(false);
  const [withdrawCurrencyModal, setWithdrawCurrencyModal] =
    useState<boolean>(false);
  const [depositCurrencyModal, setDepositCurrencyModal] =
    useState<boolean>(false);

  const keyValue = ({ key, value }: { key: string; value: string }) => {
    return (
      <View style={styles.keyValueContainer}>
        <AppText lbl={`${key}: `} lblStyle={styles.keyStyle} />
        <AppText lbl={`${value}`} lblStyle={styles.valueStyle} />
      </View>
    );
  };

  const WDBtn = ({
    lbl,
    iconName,
    onPress,
  }: {
    lbl: string;
    iconName: string;
    onPress?: (event: GestureResponderEvent) => void;
  }) => {
    return (
      <IconButton
        onPress={onPress}
        btnStyle={{
          borderColor:
            iconName === "deposit" ? appColors.green : appColors.pink,
          ...styles.btnWDStyle,
        }}
      >
        <AppText
          lbl={lbl}
          lblStyle={{
            color: iconName === "deposit" ? appColors.green : appColors.pink,
            ...styles.btnWDLblStyle,
          }}
        />

        <Image
          resizeMode="contain"
          source={images[iconName as keyof typeof images]}
        />
      </IconButton>
    );
  };

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.topContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.topScrollStyle}
        >
          <View style={styles.topBoxContainer}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <AppText lbl="Bitcoin" lblStyle={styles.currencyNameStyle} />

                {keyValue({ key: "Dolor price", value: "11.745$" })}
                {keyValue({ key: "Irt price", value: "10.000.000" })}
              </View>

              <View style={styles.qrStyle}>
                <Image source={images["qr" as keyof typeof images]} />
              </View>
            </View>

            <View style={{ marginVertical: 15 }}>
              <View
                style={{
                  marginBottom: 10,
                  ...styles.btnContainer,
                }}
              >
                <View style={{ width: "45%" }}>
                  {WDBtn({
                    lbl: "Withdraw IRT",
                    iconName: "withdraw",
                    onPress: () => setWithdrawRialModal(true),
                  })}
                </View>

                <View style={{ width: "45%" }}>
                  {WDBtn({
                    lbl: "Withdraw Currency",
                    iconName: "withdraw",
                    onPress: () => setWithdrawCurrencyModal(true),
                  })}
                </View>
              </View>

              <View style={styles.btnContainer}>
                <View style={{ width: "45%" }}>
                  {WDBtn({
                    lbl: "Deposit IRT",
                    iconName: "deposit",
                    onPress: () => setDepositRialModal(true),
                  })}
                </View>

                <View style={{ width: "45%" }}>
                  {WDBtn({
                    lbl: "Deposit Currency",
                    iconName: "deposit",
                    onPress: () => setDepositCurrencyModal(true),
                  })}
                </View>
              </View>
            </View>

            <View>
              <AppText
                lbl="Wallet Address"
                lblStyle={{ color: appColors.deactivateText, fontSize: 16 }}
              />

              <View style={styles.walletContainer}>
                <AppText
                  lbl="kjghlruelyglerihylfkocgkjvfyciiltcfosKKPg"
                  lblStyle={styles.addressStyle}
                />

                <View style={styles.lineAddress} />

                <View style={{ alignItems: "center" }}>
                  <IconButton btnStyle={styles.btnCopyStyle}>
                    <AppText
                      lbl="Copy Address"
                      lblStyle={{ color: appColors.activateText }}
                    />

                    <Feather
                      size={20}
                      name="copy"
                      style={{ marginLeft: 10 }}
                      color={appColors.deactivateText}
                    />
                  </IconButton>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.topBoxContainer}>
            <View style={styles.transactionHeader}>
              <AppText lbl="Transactions" lblStyle={{ fontSize: 16 }} />

              <View style={styles.bottomHeaderContainer}>
                <IconButton
                  btnStyle={styles.btnWithdrawStyle}
                  onPress={() => setOperationModal(true)}
                >
                  <AppText lbl="Withdraw" lblStyle={styles.lblWithdrawStyle} />

                  <AntDesign name="down" color={appColors.border} />
                </IconButton>

                <IconButton
                  onPress={() => setMarketTypeModal(true)}
                  btnStyle={{ ...styles.btnWithdrawStyle, marginLeft: 5 }}
                >
                  <AppText lbl="IRT" lblStyle={styles.lblWithdrawStyle} />

                  <AntDesign name="down" color={appColors.border} />
                </IconButton>
              </View>
            </View>

            <View style={styles.tableCaption}>
              <TableRow lbl="Date.Time" />
              <TableRow lbl="Currency" />
              <TableRow lbl="Amount" />
              <TableRow lbl="Operation" />
            </View>

            {walletTransactionLists.map((el, index) => {
              return (
                <WalletTransactionCart
                  data={el}
                  key={index}
                  index={index}
                  length={walletTransactionLists.length}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* bottom */}
      <View style={styles.bottomContainer}>
        <AddingWallet onPress={() => setAddingWalletModal(true)} />

        <ScrollView
          horizontal
          style={{ marginTop: 15 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bottomScrollStyle}
        >
          {getCryptoCurrencies().map((el, index) => {
            return (
              <IconButton
                key={index}
                btnStyle={{
                  ...styles.currencyItemStyle,
                  marginRight:
                    index === getCryptoCurrencies().length - 1 ? 0 : 10,
                }}
              >
                <Image
                  style={styles.currencyIcon}
                  source={images[el as keyof typeof images]}
                />

                <AppText
                  lbl={el}
                  lblStyle={{ color: appColors.activateText, fontSize: 12 }}
                />
              </IconButton>
            );
          })}
        </ScrollView>
      </View>

      {/* modals */}
      {addingWalletModal && (
        <AddingWalletModal onCloseModal={() => setAddingWalletModal(false)} />
      )}

      {marketTypeModal && (
        <MarketTypeModal onCloseModal={() => setMarketTypeModal(false)} />
      )}

      {operationModal && (
        <OperationModal onCloseModal={() => setOperationModal(false)} />
      )}

      {withdrawRialModal && (
        <WithdrawRialModal onCloseModal={() => setWithdrawRialModal(false)} />
      )}

      {depositRialModal && (
        <DepositRialModal onCloseModal={() => setDepositRialModal(false)} />
      )}

      {withdrawCurrencyModal && (
        <WithdrawCurrencyModal
          onCloseModal={() => setWithdrawCurrencyModal(false)}
        />
      )}

      {depositCurrencyModal && (
        <DepositCurrencyModal
          onCloseModal={() => setDepositCurrencyModal(false)}
        />
      )}
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingBottom: 5,
    backgroundColor: appColors.textColor,
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topBoxContainer: {
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: appColors.viewBackColor,
  },
  topScrollStyle: {
    flexGrow: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  keyValueContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  keyStyle: {
    opacity: 0.5,
    color: appColors.yellow,
  },
  valueStyle: {
    fontWeight: "bold",
    color: appColors.yellow,
  },
  currencyNameStyle: {
    fontSize: 24,
    color: appColors.yellow,
  },
  qrStyle: {
    flex: 1,
    alignItems: "flex-end",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnWDStyle: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnWDLblStyle: {
    fontSize: 12,
    marginRight: 10,
  },
  walletContainer: {
    height: 85,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-evenly",
    borderColor: appColors.deactivateText,
  },
  addressStyle: {
    textAlign: "center",
    color: appColors.activateText,
  },
  lineAddress: {
    height: 1,
    backgroundColor: appColors.deactivateText,
  },
  btnCopyStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnWithdrawStyle: {
    width: 95,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    borderColor: appColors.border,
    justifyContent: "space-around",
  },
  lblWithdrawStyle: {
    fontSize: 12,
    color: appColors.border,
  },
  tableCaption: {
    height: 35,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: appColors.secondary,
  },
  bottomContainer: {
    padding: 10,
    marginTop: 6,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: appColors.viewBackColor,
  },
  bottomHeaderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomScrollStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  currencyItemStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 3,
    alignItems: "center",
    paddingHorizontal: 25,
    borderColor: appColors.border,
  },
  currencyIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
});
