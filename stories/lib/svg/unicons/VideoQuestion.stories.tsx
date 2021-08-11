import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VideoQuestion, VideoQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VideoQuestion",
  component: VideoQuestion,
} as ComponentMeta<typeof VideoQuestion>;

const Template: ComponentStory<typeof VideoQuestion> = (
  args: VideoQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VideoQuestion {...args} />
    <VideoQuestion {...args} fill="red.500" />
    <VideoQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
