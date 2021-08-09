import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentHeart, CommentHeartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentHeart",
  component: CommentHeart,
} as ComponentMeta<typeof CommentHeart>;

const Template: ComponentStory<typeof CommentHeart> = (
  args: CommentHeartPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentHeart {...args} />
    <CommentHeart {...args} fill="red.500" />
    <CommentHeart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
