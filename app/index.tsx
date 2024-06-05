import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const AuthPage = () => {
  return (
    <View>
      <Link href={"(tabs)/Dashboard"}>Tabs</Link>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({});
