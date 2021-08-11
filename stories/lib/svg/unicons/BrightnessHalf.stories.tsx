import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrightnessHalf, BrightnessHalfPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessHalf",
  component: BrightnessHalf,
} as ComponentMeta<typeof BrightnessHalf>;

const Template: ComponentStory<typeof BrightnessHalf> = (
  args: BrightnessHalfPropsI
) => (
  <Box display="flex" gap="20px">
    <BrightnessHalf {...args} />
    <BrightnessHalf {...args} fill="red.500" />
    <BrightnessHalf {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
