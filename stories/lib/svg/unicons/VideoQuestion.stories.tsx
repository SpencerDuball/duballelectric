import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VideoQuestion, VideoQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VideoQuestion",
  component: VideoQuestion,
} as ComponentMeta<typeof VideoQuestion>;

const Template: ComponentStory<typeof VideoQuestion> = (
  args: VideoQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <VideoQuestion {...args} />
    <VideoQuestion {...args} fill="red.500" />
    <VideoQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
