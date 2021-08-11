import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyBillStack, MoneyBillStackPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyBillStack",
  component: MoneyBillStack,
} as ComponentMeta<typeof MoneyBillStack>;

const Template: ComponentStory<typeof MoneyBillStack> = (
  args: MoneyBillStackPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MoneyBillStack {...args} />
    <MoneyBillStack {...args} fill="red.500" />
    <MoneyBillStack {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
