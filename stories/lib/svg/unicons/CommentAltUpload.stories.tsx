import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltUpload, CommentAltUploadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltUpload",
  component: CommentAltUpload,
} as ComponentMeta<typeof CommentAltUpload>;

const Template: ComponentStory<typeof CommentAltUpload> = (
  args: CommentAltUploadPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltUpload {...args} />
    <CommentAltUpload {...args} fill="red.500" />
    <CommentAltUpload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
