import { appColors } from "@/appColors";
import AppText from "@/texts/AppText";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: appColors.textColor }}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabStyle,
          tabBarActiveTintColor: appColors.yellow,
          tabBarInactiveTintColor: appColors.placeHolder,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            let iconName: keyof typeof MaterialIcons.glyphMap = "dashboard";

            if (route.name === "Dashboard") iconName = "dashboard";
            else if (route.name === "History") iconName = "history";
            else if (route.name === "Profile") iconName = "person";
            else if (route.name === "Wallet") iconName = "wallet";
            else if (route.name === "Market") iconName = "shopping-cart";

            return (
              <View style={styles.container}>
                <MaterialIcons color={color} name={iconName} size={size} />
                <AppText
                  lbl={route.name}
                  lblStyle={{ ...styles.lblStyle, color }}
                />
              </View>
            );
          },
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tabs.Screen name="Profile" />
        <Tabs.Screen name="History" />
        <Tabs.Screen name="Dashboard" />
        <Tabs.Screen name="Market" />
        <Tabs.Screen name="Wallet" />
      </Tabs>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabStyle: {
    height: 60,
    paddingBottom: 2.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: appColors.primary,
    backgroundColor: appColors.primary,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  lblStyle: {
    fontSize: 12,
  },
});
