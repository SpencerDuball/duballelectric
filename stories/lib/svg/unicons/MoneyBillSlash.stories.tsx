import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyBillSlash, MoneyBillSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyBillSlash",
  component: MoneyBillSlash,
} as ComponentMeta<typeof MoneyBillSlash>;

const Template: ComponentStory<typeof MoneyBillSlash> = (
  args: MoneyBillSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <MoneyBillSlash {...args} />
    <MoneyBillSlash {...args} fill="red.500" />
    <MoneyBillSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
