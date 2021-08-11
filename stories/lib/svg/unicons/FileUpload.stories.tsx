import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileUpload, FileUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileUpload",
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (
  args: FileUploadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileUpload {...args} />
    <FileUpload {...args} fill="red.500" />
    <FileUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
