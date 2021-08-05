import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Video, VideoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Video",
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args: VideoPropsI) => (
  <x.div display="flex" gap="20px">
    <Video {...args} />
    <Video {...args} fill="red.500" />
    <Video {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
