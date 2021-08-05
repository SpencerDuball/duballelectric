import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltSearch, CommentAltSearchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltSearch",
  component: CommentAltSearch,
} as ComponentMeta<typeof CommentAltSearch>;

const Template: ComponentStory<typeof CommentAltSearch> = (
  args: CommentAltSearchPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltSearch {...args} />
    <CommentAltSearch {...args} fill="red.500" />
    <CommentAltSearch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
