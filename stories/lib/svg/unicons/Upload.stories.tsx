import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Upload, UploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args: UploadPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Upload {...args} />
    <Upload {...args} fill="red.500" />
    <Upload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
