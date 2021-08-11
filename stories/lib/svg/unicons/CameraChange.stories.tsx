import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CameraChange, CameraChangePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CameraChange",
  component: CameraChange,
} as ComponentMeta<typeof CameraChange>;

const Template: ComponentStory<typeof CameraChange> = (
  args: CameraChangePropsI
) => (
  <Box display="flex" gap="20px">
    <CameraChange {...args} />
    <CameraChange {...args} fill="red.500" />
    <CameraChange {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
