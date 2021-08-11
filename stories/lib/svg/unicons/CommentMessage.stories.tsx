import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentMessage, CommentMessagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentMessage",
  component: CommentMessage,
} as ComponentMeta<typeof CommentMessage>;

const Template: ComponentStory<typeof CommentMessage> = (
  args: CommentMessagePropsI
) => (
  <Box display="flex" gap="20px">
    <CommentMessage {...args} />
    <CommentMessage {...args} fill="red.500" />
    <CommentMessage {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
