import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrightnessEmpty, BrightnessEmptyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessEmpty",
  component: BrightnessEmpty,
} as ComponentMeta<typeof BrightnessEmpty>;

const Template: ComponentStory<typeof BrightnessEmpty> = (
  args: BrightnessEmptyPropsI
) => (
  <Box display="flex" gap="20px">
    <BrightnessEmpty {...args} />
    <BrightnessEmpty {...args} fill="red.500" />
    <BrightnessEmpty {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
