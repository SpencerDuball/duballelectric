import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentSlash, CommentSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentSlash",
  component: CommentSlash,
} as ComponentMeta<typeof CommentSlash>;

const Template: ComponentStory<typeof CommentSlash> = (
  args: CommentSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentSlash {...args} />
    <CommentSlash {...args} fill="red.500" />
    <CommentSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
