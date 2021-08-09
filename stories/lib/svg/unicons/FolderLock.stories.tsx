import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderLock, FolderLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderLock",
  component: FolderLock,
} as ComponentMeta<typeof FolderLock>;

const Template: ComponentStory<typeof FolderLock> = (
  args: FolderLockPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderLock {...args} />
    <FolderLock {...args} fill="red.500" />
    <FolderLock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
