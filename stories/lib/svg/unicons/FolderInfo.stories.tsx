import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderInfo, FolderInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderInfo",
  component: FolderInfo,
} as ComponentMeta<typeof FolderInfo>;

const Template: ComponentStory<typeof FolderInfo> = (
  args: FolderInfoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FolderInfo {...args} />
    <FolderInfo {...args} fill="red.500" />
    <FolderInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
