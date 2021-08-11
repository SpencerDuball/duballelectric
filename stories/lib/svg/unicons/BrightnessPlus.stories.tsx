import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrightnessPlus, BrightnessPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessPlus",
  component: BrightnessPlus,
} as ComponentMeta<typeof BrightnessPlus>;

const Template: ComponentStory<typeof BrightnessPlus> = (
  args: BrightnessPlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BrightnessPlus {...args} />
    <BrightnessPlus {...args} fill="red.500" />
    <BrightnessPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
