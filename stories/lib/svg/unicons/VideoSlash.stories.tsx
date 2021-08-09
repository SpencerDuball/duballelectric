import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VideoSlash, VideoSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VideoSlash",
  component: VideoSlash,
} as ComponentMeta<typeof VideoSlash>;

const Template: ComponentStory<typeof VideoSlash> = (
  args: VideoSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <VideoSlash {...args} />
    <VideoSlash {...args} fill="red.500" />
    <VideoSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
