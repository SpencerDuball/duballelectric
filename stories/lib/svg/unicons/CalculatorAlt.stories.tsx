import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CalculatorAlt, CalculatorAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CalculatorAlt",
  component: CalculatorAlt,
} as ComponentMeta<typeof CalculatorAlt>;

const Template: ComponentStory<typeof CalculatorAlt> = (
  args: CalculatorAltPropsI
) => (
  <Box display="flex" gap="20px">
    <CalculatorAlt {...args} />
    <CalculatorAlt {...args} fill="red.500" />
    <CalculatorAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
