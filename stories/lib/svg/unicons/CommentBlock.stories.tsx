import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentBlock, CommentBlockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentBlock",
  component: CommentBlock,
} as ComponentMeta<typeof CommentBlock>;

const Template: ComponentStory<typeof CommentBlock> = (
  args: CommentBlockPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentBlock {...args} />
    <CommentBlock {...args} fill="red.500" />
    <CommentBlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
