import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Setting, SettingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Setting",
  component: Setting,
} as ComponentMeta<typeof Setting>;

const Template: ComponentStory<typeof Setting> = (args: SettingPropsI) => (
  <x.div display="flex" gap="20px">
    <Setting {...args} />
    <Setting {...args} fill="red.500" />
    <Setting {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
