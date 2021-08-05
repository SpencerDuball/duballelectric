import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentSearch, CommentSearchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentSearch",
  component: CommentSearch,
} as ComponentMeta<typeof CommentSearch>;

const Template: ComponentStory<typeof CommentSearch> = (
  args: CommentSearchPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentSearch {...args} />
    <CommentSearch {...args} fill="red.500" />
    <CommentSearch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
