import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wallet, WalletPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wallet",
  component: Wallet,
} as ComponentMeta<typeof Wallet>;

const Template: ComponentStory<typeof Wallet> = (args: WalletPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Wallet {...args} />
    <Wallet {...args} fill="red.500" />
    <Wallet {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
