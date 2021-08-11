import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CameraSlash, CameraSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CameraSlash",
  component: CameraSlash,
} as ComponentMeta<typeof CameraSlash>;

const Template: ComponentStory<typeof CameraSlash> = (
  args: CameraSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CameraSlash {...args} />
    <CameraSlash {...args} fill="red.500" />
    <CameraSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
