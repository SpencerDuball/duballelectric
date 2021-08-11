import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  TemperatureThreeQuarter,
  TemperatureThreeQuarterPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureThreeQuarter",
  component: TemperatureThreeQuarter,
} as ComponentMeta<typeof TemperatureThreeQuarter>;

const Template: ComponentStory<typeof TemperatureThreeQuarter> = (
  args: TemperatureThreeQuarterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TemperatureThreeQuarter {...args} />
    <TemperatureThreeQuarter {...args} fill="red.500" />
    <TemperatureThreeQuarter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
