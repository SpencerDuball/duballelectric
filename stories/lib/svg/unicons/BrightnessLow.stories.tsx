import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrightnessLow, BrightnessLowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessLow",
  component: BrightnessLow,
} as ComponentMeta<typeof BrightnessLow>;

const Template: ComponentStory<typeof BrightnessLow> = (
  args: BrightnessLowPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BrightnessLow {...args} />
    <BrightnessLow {...args} fill="red.500" />
    <BrightnessLow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
