import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderPlus, FolderPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderPlus",
  component: FolderPlus,
} as ComponentMeta<typeof FolderPlus>;

const Template: ComponentStory<typeof FolderPlus> = (
  args: FolderPlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FolderPlus {...args} />
    <FolderPlus {...args} fill="red.500" />
    <FolderPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
