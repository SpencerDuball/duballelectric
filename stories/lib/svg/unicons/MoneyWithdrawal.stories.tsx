import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyWithdrawal, MoneyWithdrawalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyWithdrawal",
  component: MoneyWithdrawal,
} as ComponentMeta<typeof MoneyWithdrawal>;

const Template: ComponentStory<typeof MoneyWithdrawal> = (
  args: MoneyWithdrawalPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MoneyWithdrawal {...args} />
    <MoneyWithdrawal {...args} fill="red.500" />
    <MoneyWithdrawal {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
