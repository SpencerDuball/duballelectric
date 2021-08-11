import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderOpen, FolderOpenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderOpen",
  component: FolderOpen,
} as ComponentMeta<typeof FolderOpen>;

const Template: ComponentStory<typeof FolderOpen> = (
  args: FolderOpenPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderOpen {...args} />
    <FolderOpen {...args} fill="red.500" />
    <FolderOpen {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
