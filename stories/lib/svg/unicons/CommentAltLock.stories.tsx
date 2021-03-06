import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltLock, CommentAltLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltLock",
  component: CommentAltLock,
} as ComponentMeta<typeof CommentAltLock>;

const Template: ComponentStory<typeof CommentAltLock> = (
  args: CommentAltLockPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltLock {...args} />
    <CommentAltLock {...args} fill="red.500" />
    <CommentAltLock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
