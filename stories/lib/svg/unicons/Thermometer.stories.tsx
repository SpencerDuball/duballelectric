import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Thermometer, ThermometerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Thermometer",
  component: Thermometer,
} as ComponentMeta<typeof Thermometer>;

const Template: ComponentStory<typeof Thermometer> = (
  args: ThermometerPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Thermometer {...args} />
    <Thermometer {...args} fill="red.500" />
    <Thermometer {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
