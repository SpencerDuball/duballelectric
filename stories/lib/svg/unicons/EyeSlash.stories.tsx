import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EyeSlash, EyeSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EyeSlash",
  component: EyeSlash,
} as ComponentMeta<typeof EyeSlash>;

const Template: ComponentStory<typeof EyeSlash> = (args: EyeSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <EyeSlash {...args} />
    <EyeSlash {...args} fill="red.500" />
    <EyeSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
