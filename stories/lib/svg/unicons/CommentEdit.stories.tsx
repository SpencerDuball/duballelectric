import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentEdit, CommentEditPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentEdit",
  component: CommentEdit,
} as ComponentMeta<typeof CommentEdit>;

const Template: ComponentStory<typeof CommentEdit> = (
  args: CommentEditPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentEdit {...args} />
    <CommentEdit {...args} fill="red.500" />
    <CommentEdit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
