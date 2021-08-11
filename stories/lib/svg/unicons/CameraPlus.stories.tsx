import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CameraPlus, CameraPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CameraPlus",
  component: CameraPlus,
} as ComponentMeta<typeof CameraPlus>;

const Template: ComponentStory<typeof CameraPlus> = (
  args: CameraPlusPropsI
) => (
  <Box display="flex" gap="20px">
    <CameraPlus {...args} />
    <CameraPlus {...args} fill="red.500" />
    <CameraPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
