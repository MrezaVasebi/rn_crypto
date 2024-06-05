import { BackButton } from "@/buttons";
import { MessageCart } from "@/carts";
import TabRootPage from "@/TabRootPage";
import AppText from "@/texts/AppText";
import { router } from "expo-router";
import React from "react";

const Notifications = () => {
  return (
    <TabRootPage contentStyle={{ padding: 20 }}>
      <BackButton onPress={() => router.back()} />

      <AppText
        lbl="Received Message"
        lblStyle={{ fontSize: 20, marginVertical: 20 }}
      />

      {[
        {
          msg: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        },
        {
          msg: '"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."',
        },
        {
          msg: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        },
        {
          msg: '"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."',
        },
      ].map((el, index) => {
        return <MessageCart msg={el.msg} key={index} />;
      })}
    </TabRootPage>
  );
};

export default Notifications;
