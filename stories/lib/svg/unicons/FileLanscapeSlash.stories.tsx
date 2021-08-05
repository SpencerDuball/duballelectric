import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileLanscapeSlash, FileLanscapeSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileLanscapeSlash",
  component: FileLanscapeSlash,
} as ComponentMeta<typeof FileLanscapeSlash>;

const Template: ComponentStory<typeof FileLanscapeSlash> = (
  args: FileLanscapeSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileLanscapeSlash {...args} />
    <FileLanscapeSlash {...args} fill="red.500" />
    <FileLanscapeSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
