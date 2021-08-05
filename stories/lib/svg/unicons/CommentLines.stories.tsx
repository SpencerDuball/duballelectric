import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentLines, CommentLinesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentLines",
  component: CommentLines,
} as ComponentMeta<typeof CommentLines>;

const Template: ComponentStory<typeof CommentLines> = (
  args: CommentLinesPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentLines {...args} />
    <CommentLines {...args} fill="red.500" />
    <CommentLines {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
