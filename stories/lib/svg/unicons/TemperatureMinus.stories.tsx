import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TemperatureMinus, TemperatureMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureMinus",
  component: TemperatureMinus,
} as ComponentMeta<typeof TemperatureMinus>;

const Template: ComponentStory<typeof TemperatureMinus> = (
  args: TemperatureMinusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TemperatureMinus {...args} />
    <TemperatureMinus {...args} fill="red.500" />
    <TemperatureMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
