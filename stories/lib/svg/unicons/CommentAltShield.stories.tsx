import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltShield, CommentAltShieldPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltShield",
  component: CommentAltShield,
} as ComponentMeta<typeof CommentAltShield>;

const Template: ComponentStory<typeof CommentAltShield> = (
  args: CommentAltShieldPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltShield {...args} />
    <CommentAltShield {...args} fill="red.500" />
    <CommentAltShield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
