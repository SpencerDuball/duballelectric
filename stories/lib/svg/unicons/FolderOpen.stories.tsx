import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderOpen, FolderOpenPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderOpen",
  component: FolderOpen,
} as ComponentMeta<typeof FolderOpen>;

const Template: ComponentStory<typeof FolderOpen> = (
  args: FolderOpenPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderOpen {...args} />
    <FolderOpen {...args} fill="red.500" />
    <FolderOpen {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
