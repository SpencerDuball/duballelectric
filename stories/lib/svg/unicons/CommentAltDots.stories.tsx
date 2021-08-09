import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltDots, CommentAltDotsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltDots",
  component: CommentAltDots,
} as ComponentMeta<typeof CommentAltDots>;

const Template: ComponentStory<typeof CommentAltDots> = (
  args: CommentAltDotsPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltDots {...args} />
    <CommentAltDots {...args} fill="red.500" />
    <CommentAltDots {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
