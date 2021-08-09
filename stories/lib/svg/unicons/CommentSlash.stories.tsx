import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentSlash, CommentSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentSlash",
  component: CommentSlash,
} as ComponentMeta<typeof CommentSlash>;

const Template: ComponentStory<typeof CommentSlash> = (
  args: CommentSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentSlash {...args} />
    <CommentSlash {...args} fill="red.500" />
    <CommentSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
