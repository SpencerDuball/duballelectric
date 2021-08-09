import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VolumeUp, VolumeUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VolumeUp",
  component: VolumeUp,
} as ComponentMeta<typeof VolumeUp>;

const Template: ComponentStory<typeof VolumeUp> = (args: VolumeUpPropsI) => (
  <x.div display="flex" gap="20px">
    <VolumeUp {...args} />
    <VolumeUp {...args} fill="red.500" />
    <VolumeUp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
