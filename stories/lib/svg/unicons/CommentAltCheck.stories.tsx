import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltCheck, CommentAltCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltCheck",
  component: CommentAltCheck,
} as ComponentMeta<typeof CommentAltCheck>;

const Template: ComponentStory<typeof CommentAltCheck> = (
  args: CommentAltCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltCheck {...args} />
    <CommentAltCheck {...args} fill="red.500" />
    <CommentAltCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
