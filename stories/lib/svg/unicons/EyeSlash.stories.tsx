import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EyeSlash, EyeSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EyeSlash",
  component: EyeSlash,
} as ComponentMeta<typeof EyeSlash>;

const Template: ComponentStory<typeof EyeSlash> = (args: EyeSlashPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <EyeSlash {...args} />
    <EyeSlash {...args} fill="red.500" />
    <EyeSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
