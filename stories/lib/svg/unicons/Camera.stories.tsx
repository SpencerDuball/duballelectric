import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Camera, CameraPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Camera",
  component: Camera,
} as ComponentMeta<typeof Camera>;

const Template: ComponentStory<typeof Camera> = (args: CameraPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Camera {...args} />
    <Camera {...args} fill="red.500" />
    <Camera {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
