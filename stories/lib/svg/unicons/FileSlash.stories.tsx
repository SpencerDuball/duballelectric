import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileSlash, FileSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileSlash",
  component: FileSlash,
} as ComponentMeta<typeof FileSlash>;

const Template: ComponentStory<typeof FileSlash> = (args: FileSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <FileSlash {...args} />
    <FileSlash {...args} fill="red.500" />
    <FileSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
