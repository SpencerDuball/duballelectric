import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AndroidPhoneSlash, AndroidPhoneSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AndroidPhoneSlash",
  component: AndroidPhoneSlash,
} as ComponentMeta<typeof AndroidPhoneSlash>;

const Template: ComponentStory<typeof AndroidPhoneSlash> = (
  args: AndroidPhoneSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <AndroidPhoneSlash {...args} />
    <AndroidPhoneSlash {...args} fill="red.500" />
    <AndroidPhoneSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
