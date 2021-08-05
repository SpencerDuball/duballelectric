import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentRedo, CommentRedoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentRedo",
  component: CommentRedo,
} as ComponentMeta<typeof CommentRedo>;

const Template: ComponentStory<typeof CommentRedo> = (
  args: CommentRedoPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentRedo {...args} />
    <CommentRedo {...args} fill="red.500" />
    <CommentRedo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
