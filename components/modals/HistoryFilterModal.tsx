import { appColors } from "@/appColors";
import { ModalBottomButtons } from "@/buttons";
import { getCryptoCurrencies } from "@/getCryptoCurrencies";
import { FromToInput } from "@/inputs";
import AppText from "@/texts/AppText";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RootModalPage from "../../../components/modals/RootModalPage";

interface IHistoryFilterModal {
  onCloseModal: (value: boolean) => void;
}

const HistoryFilterModal = (props: IHistoryFilterModal) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("BTC");

  return (
    <RootModalPage
      title="Filter And Search"
      scrollStyle={styles.scrollStyle}
      onCloseModal={() => props.onCloseModal(false)}
    >
      <View style={{ paddingVertical: 10 }}>
        <AppText
          lbl="Choose Currency"
          lblStyle={{ color: appColors.deactivateText, fontSize: 13 }}
        />

        <View style={styles.currencyContainer}>
          <Picker
            selectedValue={selectedCurrency}
            onValueChange={(itemValue, itemIndex) => {
              // console.log(itemIndex);
              setSelectedCurrency(itemValue);
            }}
            mode="dropdown"
            style={{ color: appColors.border }}
            dropdownIconColor={appColors.border}
            dropdownIconRippleColor={appColors.border}
          >
            {getCryptoCurrencies().map((el, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={el}
                  value={el}
                  fontFamily="medium"
                  style={{ fontSize: 15 }}
                  color={appColors.secondary}
                />
              );
            })}
          </Picker>
        </View>

        <View style={{ marginTop: 5 }}>
          <FromToInput label="Amount" placeholder="Amount" />
          <FromToInput label="Price" placeholder="Price" />
          <FromToInput label="Date" placeholder="Date" />
        </View>
      </View>

      <ModalBottomButtons
        onApply={() => {}}
        onCancel={() => props.onCloseModal(false)}
      />
    </RootModalPage>
  );
};

export default HistoryFilterModal;

const styles = StyleSheet.create({
  scrollStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  currencyContainer: {
    width: 150,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: appColors.border,
  },
});
