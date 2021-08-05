import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderInfo, FolderInfoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderInfo",
  component: FolderInfo,
} as ComponentMeta<typeof FolderInfo>;

const Template: ComponentStory<typeof FolderInfo> = (
  args: FolderInfoPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderInfo {...args} />
    <FolderInfo {...args} fill="red.500" />
    <FolderInfo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
