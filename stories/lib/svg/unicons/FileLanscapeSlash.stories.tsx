import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileLanscapeSlash, FileLanscapeSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileLanscapeSlash",
  component: FileLanscapeSlash,
} as ComponentMeta<typeof FileLanscapeSlash>;

const Template: ComponentStory<typeof FileLanscapeSlash> = (
  args: FileLanscapeSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileLanscapeSlash {...args} />
    <FileLanscapeSlash {...args} fill="red.500" />
    <FileLanscapeSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
