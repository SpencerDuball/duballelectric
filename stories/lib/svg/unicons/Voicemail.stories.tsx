import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Voicemail, VoicemailPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Voicemail",
  component: Voicemail,
} as ComponentMeta<typeof Voicemail>;

const Template: ComponentStory<typeof Voicemail> = (args: VoicemailPropsI) => (
  <x.div display="flex" gap="20px">
    <Voicemail {...args} />
    <Voicemail {...args} fill="red.500" />
    <Voicemail {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
