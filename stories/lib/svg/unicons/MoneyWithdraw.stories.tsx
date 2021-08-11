import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyWithdraw, MoneyWithdrawPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyWithdraw",
  component: MoneyWithdraw,
} as ComponentMeta<typeof MoneyWithdraw>;

const Template: ComponentStory<typeof MoneyWithdraw> = (
  args: MoneyWithdrawPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MoneyWithdraw {...args} />
    <MoneyWithdraw {...args} fill="red.500" />
    <MoneyWithdraw {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
