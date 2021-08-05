import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Microphone, MicrophonePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Microphone",
  component: Microphone,
} as ComponentMeta<typeof Microphone>;

const Template: ComponentStory<typeof Microphone> = (
  args: MicrophonePropsI
) => (
  <x.div display="flex" gap="20px">
    <Microphone {...args} />
    <Microphone {...args} fill="red.500" />
    <Microphone {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
