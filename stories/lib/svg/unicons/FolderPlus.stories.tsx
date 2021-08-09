import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderPlus, FolderPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderPlus",
  component: FolderPlus,
} as ComponentMeta<typeof FolderPlus>;

const Template: ComponentStory<typeof FolderPlus> = (
  args: FolderPlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderPlus {...args} />
    <FolderPlus {...args} fill="red.500" />
    <FolderPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
