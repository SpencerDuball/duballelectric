import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderExclamation, FolderExclamationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderExclamation",
  component: FolderExclamation,
} as ComponentMeta<typeof FolderExclamation>;

const Template: ComponentStory<typeof FolderExclamation> = (
  args: FolderExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderExclamation {...args} />
    <FolderExclamation {...args} fill="red.500" />
    <FolderExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
