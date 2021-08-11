import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Webcam, WebcamPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Webcam",
  component: Webcam,
} as ComponentMeta<typeof Webcam>;

const Template: ComponentStory<typeof Webcam> = (args: WebcamPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Webcam {...args} />
    <Webcam {...args} fill="red.500" />
    <Webcam {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
