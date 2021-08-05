import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentDownload, CommentDownloadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentDownload",
  component: CommentDownload,
} as ComponentMeta<typeof CommentDownload>;

const Template: ComponentStory<typeof CommentDownload> = (
  args: CommentDownloadPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentDownload {...args} />
    <CommentDownload {...args} fill="red.500" />
    <CommentDownload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
