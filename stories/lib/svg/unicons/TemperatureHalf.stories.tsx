import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TemperatureHalf, TemperatureHalfPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureHalf",
  component: TemperatureHalf,
} as ComponentMeta<typeof TemperatureHalf>;

const Template: ComponentStory<typeof TemperatureHalf> = (
  args: TemperatureHalfPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TemperatureHalf {...args} />
    <TemperatureHalf {...args} fill="red.500" />
    <TemperatureHalf {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
