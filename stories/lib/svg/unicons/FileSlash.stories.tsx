import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileSlash, FileSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileSlash",
  component: FileSlash,
} as ComponentMeta<typeof FileSlash>;

const Template: ComponentStory<typeof FileSlash> = (args: FileSlashPropsI) => (
  <Box display="flex" gap="20px">
    <FileSlash {...args} />
    <FileSlash {...args} fill="red.500" />
    <FileSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
