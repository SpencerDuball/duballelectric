import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyBill, MoneyBillPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyBill",
  component: MoneyBill,
} as ComponentMeta<typeof MoneyBill>;

const Template: ComponentStory<typeof MoneyBill> = (args: MoneyBillPropsI) => (
  <Box display="flex" gap="20px">
    <MoneyBill {...args} />
    <MoneyBill {...args} fill="red.500" />
    <MoneyBill {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
