import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentQuestion, CommentQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentQuestion",
  component: CommentQuestion,
} as ComponentMeta<typeof CommentQuestion>;

const Template: ComponentStory<typeof CommentQuestion> = (
  args: CommentQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentQuestion {...args} />
    <CommentQuestion {...args} fill="red.500" />
    <CommentQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
