import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltLock, CommentAltLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltLock",
  component: CommentAltLock,
} as ComponentMeta<typeof CommentAltLock>;

const Template: ComponentStory<typeof CommentAltLock> = (
  args: CommentAltLockPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltLock {...args} />
    <CommentAltLock {...args} fill="red.500" />
    <CommentAltLock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
