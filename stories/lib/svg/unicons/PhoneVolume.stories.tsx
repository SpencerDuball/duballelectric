import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PhoneVolume, PhoneVolumePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PhoneVolume",
  component: PhoneVolume,
} as ComponentMeta<typeof PhoneVolume>;

const Template: ComponentStory<typeof PhoneVolume> = (
  args: PhoneVolumePropsI
) => (
  <x.div display="flex" gap="20px">
    <PhoneVolume {...args} />
    <PhoneVolume {...args} fill="red.500" />
    <PhoneVolume {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
