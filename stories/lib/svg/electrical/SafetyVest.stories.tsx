import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SafetyVest, SafetyVestPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/SafetyVest",
  component: SafetyVest,
} as ComponentMeta<typeof SafetyVest>;

const Template: ComponentStory<typeof SafetyVest> = (
  args: SafetyVestPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SafetyVest {...args} />
    <SafetyVest {...args} fill="red.500" />
    <SafetyVest {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
