import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentLock, CommentLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentLock",
  component: CommentLock,
} as ComponentMeta<typeof CommentLock>;

const Template: ComponentStory<typeof CommentLock> = (
  args: CommentLockPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentLock {...args} />
    <CommentLock {...args} fill="red.500" />
    <CommentLock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
