import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderMinus, FolderMinusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderMinus",
  component: FolderMinus,
} as ComponentMeta<typeof FolderMinus>;

const Template: ComponentStory<typeof FolderMinus> = (
  args: FolderMinusPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderMinus {...args} />
    <FolderMinus {...args} fill="red.500" />
    <FolderMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
