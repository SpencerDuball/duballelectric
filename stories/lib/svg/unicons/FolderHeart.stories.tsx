import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderHeart, FolderHeartPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderHeart",
  component: FolderHeart,
} as ComponentMeta<typeof FolderHeart>;

const Template: ComponentStory<typeof FolderHeart> = (
  args: FolderHeartPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderHeart {...args} />
    <FolderHeart {...args} fill="red.500" />
    <FolderHeart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
