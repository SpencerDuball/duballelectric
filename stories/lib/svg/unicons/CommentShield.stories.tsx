import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentShield, CommentShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentShield",
  component: CommentShield,
} as ComponentMeta<typeof CommentShield>;

const Template: ComponentStory<typeof CommentShield> = (
  args: CommentShieldPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentShield {...args} />
    <CommentShield {...args} fill="red.500" />
    <CommentShield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
