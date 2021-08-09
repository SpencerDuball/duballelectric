import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Wallet, WalletPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wallet",
  component: Wallet,
} as ComponentMeta<typeof Wallet>;

const Template: ComponentStory<typeof Wallet> = (args: WalletPropsI) => (
  <x.div display="flex" gap="20px">
    <Wallet {...args} />
    <Wallet {...args} fill="red.500" />
    <Wallet {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
