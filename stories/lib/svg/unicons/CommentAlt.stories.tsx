import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAlt, CommentAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAlt",
  component: CommentAlt,
} as ComponentMeta<typeof CommentAlt>;

const Template: ComponentStory<typeof CommentAlt> = (
  args: CommentAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAlt {...args} />
    <CommentAlt {...args} fill="red.500" />
    <CommentAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
