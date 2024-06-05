import { appColors } from "@/appColors";
import { IconButton } from "@/buttons";
import AppText from "@/texts/AppText";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface IRootModalPage {
  title: string;
  onCloseModal: () => void;
  rootStyle?: StyleProp<ViewStyle>;
  scrollStyle?: StyleProp<ViewStyle>;
}

const RootModalPage = (props: IRootModalPage & ScrollViewProps) => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.rootStyle, props.rootStyle]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollStyle, props.scrollStyle]}
        >
          <View style={styles.containerStyle}>
            <View style={styles.headerStyle}>
              <AppText lbl={props.title} lblStyle={styles.txtHeaderStyle} />

              <IconButton
                onPress={props.onCloseModal}
                btnStyle={styles.btnCloseStyle}
              >
                <AntDesign
                  name="close"
                  size={20}
                  color={appColors.viewBackColor}
                />
              </IconButton>
            </View>

            {props.children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default RootModalPage;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  scrollStyle: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0,.8)",
  },
  headerStyle: {
    marginRight: 5,
    paddingRight: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtHeaderStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: appColors.deactivateText,
  },
  btnCloseStyle: {
    width: 20,
    height: 20,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.deactivateText,
  },
  containerStyle: {
    padding: 15,
    width: "100%",
    borderRadius: 50,
    backgroundColor: appColors.viewBackColor,
  },
});
