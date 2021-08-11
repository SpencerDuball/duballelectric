import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentUpload, CommentUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentUpload",
  component: CommentUpload,
} as ComponentMeta<typeof CommentUpload>;

const Template: ComponentStory<typeof CommentUpload> = (
  args: CommentUploadPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentUpload {...args} />
    <CommentUpload {...args} fill="red.500" />
    <CommentUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
