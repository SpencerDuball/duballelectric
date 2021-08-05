import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentCheck, CommentCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentCheck",
  component: CommentCheck,
} as ComponentMeta<typeof CommentCheck>;

const Template: ComponentStory<typeof CommentCheck> = (
  args: CommentCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentCheck {...args} />
    <CommentCheck {...args} fill="red.500" />
    <CommentCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
