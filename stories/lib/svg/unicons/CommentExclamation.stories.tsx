import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentExclamation, CommentExclamationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentExclamation",
  component: CommentExclamation,
} as ComponentMeta<typeof CommentExclamation>;

const Template: ComponentStory<typeof CommentExclamation> = (
  args: CommentExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentExclamation {...args} />
    <CommentExclamation {...args} fill="red.500" />
    <CommentExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
