import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentImage, CommentImagePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentImage",
  component: CommentImage,
} as ComponentMeta<typeof CommentImage>;

const Template: ComponentStory<typeof CommentImage> = (
  args: CommentImagePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentImage {...args} />
    <CommentImage {...args} fill="red.500" />
    <CommentImage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
