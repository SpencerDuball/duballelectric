import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TemperatureQuarter, TemperatureQuarterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureQuarter",
  component: TemperatureQuarter,
} as ComponentMeta<typeof TemperatureQuarter>;

const Template: ComponentStory<typeof TemperatureQuarter> = (
  args: TemperatureQuarterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TemperatureQuarter {...args} />
    <TemperatureQuarter {...args} fill="red.500" />
    <TemperatureQuarter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
