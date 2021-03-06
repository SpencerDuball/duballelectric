import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Batteries, BatteriesPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Batteries",
  component: Batteries,
} as ComponentMeta<typeof Batteries>;

const Template: ComponentStory<typeof Batteries> = (args: BatteriesPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Batteries {...args} />
    <Batteries {...args} fill="red.500" />
    <Batteries {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
