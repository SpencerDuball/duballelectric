import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HardHat, HardHatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HardHat",
  component: HardHat,
} as ComponentMeta<typeof HardHat>;

const Template: ComponentStory<typeof HardHat> = (args: HardHatPropsI) => (
  <Box display="flex" gap="20px">
    <HardHat {...args} />
    <HardHat {...args} fill="red.500" />
    <HardHat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
