import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RecordAudio, RecordAudioPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RecordAudio",
  component: RecordAudio,
} as ComponentMeta<typeof RecordAudio>;

const Template: ComponentStory<typeof RecordAudio> = (
  args: RecordAudioPropsI
) => (
  <x.div display="flex" gap="20px">
    <RecordAudio {...args} />
    <RecordAudio {...args} fill="red.500" />
    <RecordAudio {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
