import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltUpload, CommentAltUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltUpload",
  component: CommentAltUpload,
} as ComponentMeta<typeof CommentAltUpload>;

const Template: ComponentStory<typeof CommentAltUpload> = (
  args: CommentAltUploadPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltUpload {...args} />
    <CommentAltUpload {...args} fill="red.500" />
    <CommentAltUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
