import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bug, BugPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bug",
  component: Bug,
} as ComponentMeta<typeof Bug>;

const Template: ComponentStory<typeof Bug> = (args: BugPropsI) => (
  <Box display="flex" gap="20px">
    <Bug {...args} />
    <Bug {...args} fill="red.500" />
    <Bug {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
