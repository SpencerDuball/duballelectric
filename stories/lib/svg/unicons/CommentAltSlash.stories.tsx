import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltSlash, CommentAltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltSlash",
  component: CommentAltSlash,
} as ComponentMeta<typeof CommentAltSlash>;

const Template: ComponentStory<typeof CommentAltSlash> = (
  args: CommentAltSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltSlash {...args} />
    <CommentAltSlash {...args} fill="red.500" />
    <CommentAltSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
