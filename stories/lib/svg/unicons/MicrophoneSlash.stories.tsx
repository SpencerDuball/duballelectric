import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MicrophoneSlash, MicrophoneSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MicrophoneSlash",
  component: MicrophoneSlash,
} as ComponentMeta<typeof MicrophoneSlash>;

const Template: ComponentStory<typeof MicrophoneSlash> = (
  args: MicrophoneSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <MicrophoneSlash {...args} />
    <MicrophoneSlash {...args} fill="red.500" />
    <MicrophoneSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
