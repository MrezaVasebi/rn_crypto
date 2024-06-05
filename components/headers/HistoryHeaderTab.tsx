import { appColors } from "@/appColors";
import { TextButton } from "@/buttons";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IHistoryHeaderTab<T> {
  tabs: T[];
  selectedTab: string;
  onPressFilter: () => void;
  onPressTab: (value: T) => void;
}

const HistoryHeaderTab = <T,>({
  tabs,
  selectedTab,
  onPressTab,
  onPressFilter,
}: IHistoryHeaderTab<T>) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((el, index) => {
          return (
            <TextButton
              key={index}
              lblTxt={el as string}
              onPress={() => onPressTab(el)}
              btnStyle={{
                ...styles.btnStyle,
                borderBottomWidth: el === selectedTab ? 3 : 0,
                marginRight: index === tabs.length - 1 ? 0 : 20,
              }}
              lblStyle={{
                color:
                  el === selectedTab
                    ? appColors.activateText
                    : appColors.deactivateText,
                fontSize: el === selectedTab ? 14 : 12,
              }}
            />
          );
        })}
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressFilter}
        style={styles.filterStyle}
      >
        <AntDesign
          size={12}
          name="right"
          style={{ marginLeft: 10 }}
          color={appColors.deactivateText}
        />

        <AppText
          lbl="Filter"
          lblStyle={{ color: appColors.deactivateText, fontSize: 13 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HistoryHeaderTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "space-around",
    borderBottomColor: appColors.deactivateText,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnStyle: {
    height: 35,
    bottom: -2,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: appColors.yellow,
  },
  filterStyle: {
    bottom: 5,
    padding: 8,
    borderWidth: 1,
    // marginRight: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row-reverse",
    borderColor: appColors.deactivateText,
    backgroundColor: appColors.transparent,
  },
});
