import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudUpload, CloudUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudUpload",
  component: CloudUpload,
} as ComponentMeta<typeof CloudUpload>;

const Template: ComponentStory<typeof CloudUpload> = (
  args: CloudUploadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudUpload {...args} />
    <CloudUpload {...args} fill="red.500" />
    <CloudUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
