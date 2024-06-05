import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
   return (
      <Tabs initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
         <Tabs.Screen name="Wallet" />
         <Tabs.Screen name="Profile" />
         <Tabs.Screen name="Dashboard" />
         <Tabs.Screen name="History" />
         <Tabs.Screen name="Market" />
      </Tabs>
   );
}
