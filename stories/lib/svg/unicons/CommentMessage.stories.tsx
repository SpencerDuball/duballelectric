import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentMessage, CommentMessagePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentMessage",
  component: CommentMessage,
} as ComponentMeta<typeof CommentMessage>;

const Template: ComponentStory<typeof CommentMessage> = (
  args: CommentMessagePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentMessage {...args} />
    <CommentMessage {...args} fill="red.500" />
    <CommentMessage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
