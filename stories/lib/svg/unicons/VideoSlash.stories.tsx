import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VideoSlash, VideoSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VideoSlash",
  component: VideoSlash,
} as ComponentMeta<typeof VideoSlash>;

const Template: ComponentStory<typeof VideoSlash> = (
  args: VideoSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <VideoSlash {...args} />
    <VideoSlash {...args} fill="red.500" />
    <VideoSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
