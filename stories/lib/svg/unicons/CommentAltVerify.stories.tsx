import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltVerify, CommentAltVerifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltVerify",
  component: CommentAltVerify,
} as ComponentMeta<typeof CommentAltVerify>;

const Template: ComponentStory<typeof CommentAltVerify> = (
  args: CommentAltVerifyPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltVerify {...args} />
    <CommentAltVerify {...args} fill="red.500" />
    <CommentAltVerify {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
