import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltVerify, CommentAltVerifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltVerify",
  component: CommentAltVerify,
} as ComponentMeta<typeof CommentAltVerify>;

const Template: ComponentStory<typeof CommentAltVerify> = (
  args: CommentAltVerifyPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltVerify {...args} />
    <CommentAltVerify {...args} fill="red.500" />
    <CommentAltVerify {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
