import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentVerify, CommentVerifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentVerify",
  component: CommentVerify,
} as ComponentMeta<typeof CommentVerify>;

const Template: ComponentStory<typeof CommentVerify> = (
  args: CommentVerifyPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentVerify {...args} />
    <CommentVerify {...args} fill="red.500" />
    <CommentVerify {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
