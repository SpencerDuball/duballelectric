import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentShare, CommentSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentShare",
  component: CommentShare,
} as ComponentMeta<typeof CommentShare>;

const Template: ComponentStory<typeof CommentShare> = (
  args: CommentSharePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentShare {...args} />
    <CommentShare {...args} fill="red.500" />
    <CommentShare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
