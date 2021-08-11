import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentDownload, CommentDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentDownload",
  component: CommentDownload,
} as ComponentMeta<typeof CommentDownload>;

const Template: ComponentStory<typeof CommentDownload> = (
  args: CommentDownloadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentDownload {...args} />
    <CommentDownload {...args} fill="red.500" />
    <CommentDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
