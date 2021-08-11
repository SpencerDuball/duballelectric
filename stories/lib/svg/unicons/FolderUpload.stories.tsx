import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderUpload, FolderUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderUpload",
  component: FolderUpload,
} as ComponentMeta<typeof FolderUpload>;

const Template: ComponentStory<typeof FolderUpload> = (
  args: FolderUploadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FolderUpload {...args} />
    <FolderUpload {...args} fill="red.500" />
    <FolderUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
