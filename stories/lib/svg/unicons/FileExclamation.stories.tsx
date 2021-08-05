import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileExclamation, FileExclamationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileExclamation",
  component: FileExclamation,
} as ComponentMeta<typeof FileExclamation>;

const Template: ComponentStory<typeof FileExclamation> = (
  args: FileExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileExclamation {...args} />
    <FileExclamation {...args} fill="red.500" />
    <FileExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
