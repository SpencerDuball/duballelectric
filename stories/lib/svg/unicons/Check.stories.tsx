import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Check, CheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Check",
  component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args: CheckPropsI) => (
  <Box display="flex" gap="20px">
    <Check {...args} />
    <Check {...args} fill="red.500" />
    <Check {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
