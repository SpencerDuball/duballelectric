import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltShare, CommentAltSharePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltShare",
  component: CommentAltShare,
} as ComponentMeta<typeof CommentAltShare>;

const Template: ComponentStory<typeof CommentAltShare> = (
  args: CommentAltSharePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltShare {...args} />
    <CommentAltShare {...args} fill="red.500" />
    <CommentAltShare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
