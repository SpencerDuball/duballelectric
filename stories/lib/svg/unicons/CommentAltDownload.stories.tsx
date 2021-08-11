import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltDownload, CommentAltDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltDownload",
  component: CommentAltDownload,
} as ComponentMeta<typeof CommentAltDownload>;

const Template: ComponentStory<typeof CommentAltDownload> = (
  args: CommentAltDownloadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltDownload {...args} />
    <CommentAltDownload {...args} fill="red.500" />
    <CommentAltDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
