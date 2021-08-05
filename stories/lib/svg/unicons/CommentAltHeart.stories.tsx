import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltHeart, CommentAltHeartPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltHeart",
  component: CommentAltHeart,
} as ComponentMeta<typeof CommentAltHeart>;

const Template: ComponentStory<typeof CommentAltHeart> = (
  args: CommentAltHeartPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltHeart {...args} />
    <CommentAltHeart {...args} fill="red.500" />
    <CommentAltHeart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
