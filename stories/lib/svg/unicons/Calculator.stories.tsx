import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Calculator, CalculatorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calculator",
  component: Calculator,
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (
  args: CalculatorPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Calculator {...args} />
    <Calculator {...args} fill="red.500" />
    <Calculator {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
