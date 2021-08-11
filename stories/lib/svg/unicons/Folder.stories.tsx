import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Folder, FolderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Folder",
  component: Folder,
} as ComponentMeta<typeof Folder>;

const Template: ComponentStory<typeof Folder> = (args: FolderPropsI) => (
  <Box display="flex" gap="20px">
    <Folder {...args} />
    <Folder {...args} fill="red.500" />
    <Folder {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
