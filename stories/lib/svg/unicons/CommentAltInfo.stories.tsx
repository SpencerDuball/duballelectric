import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltInfo, CommentAltInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltInfo",
  component: CommentAltInfo,
} as ComponentMeta<typeof CommentAltInfo>;

const Template: ComponentStory<typeof CommentAltInfo> = (
  args: CommentAltInfoPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltInfo {...args} />
    <CommentAltInfo {...args} fill="red.500" />
    <CommentAltInfo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
