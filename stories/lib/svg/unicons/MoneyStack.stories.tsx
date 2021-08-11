import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MoneyStack, MoneyStackPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MoneyStack",
  component: MoneyStack,
} as ComponentMeta<typeof MoneyStack>;

const Template: ComponentStory<typeof MoneyStack> = (
  args: MoneyStackPropsI
) => (
  <Box display="flex" gap="20px">
    <MoneyStack {...args} />
    <MoneyStack {...args} fill="red.500" />
    <MoneyStack {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
