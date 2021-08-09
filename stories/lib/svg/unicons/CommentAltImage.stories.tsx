import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltImage, CommentAltImagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltImage",
  component: CommentAltImage,
} as ComponentMeta<typeof CommentAltImage>;

const Template: ComponentStory<typeof CommentAltImage> = (
  args: CommentAltImagePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltImage {...args} />
    <CommentAltImage {...args} fill="red.500" />
    <CommentAltImage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
