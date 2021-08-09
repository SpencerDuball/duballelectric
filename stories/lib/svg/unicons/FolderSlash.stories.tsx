import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderSlash, FolderSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderSlash",
  component: FolderSlash,
} as ComponentMeta<typeof FolderSlash>;

const Template: ComponentStory<typeof FolderSlash> = (
  args: FolderSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderSlash {...args} />
    <FolderSlash {...args} fill="red.500" />
    <FolderSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
