import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltMessage, CommentAltMessagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltMessage",
  component: CommentAltMessage,
} as ComponentMeta<typeof CommentAltMessage>;

const Template: ComponentStory<typeof CommentAltMessage> = (
  args: CommentAltMessagePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltMessage {...args} />
    <CommentAltMessage {...args} fill="red.500" />
    <CommentAltMessage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
