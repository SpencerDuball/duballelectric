import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentInfo, CommentInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentInfo",
  component: CommentInfo,
} as ComponentMeta<typeof CommentInfo>;

const Template: ComponentStory<typeof CommentInfo> = (
  args: CommentInfoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentInfo {...args} />
    <CommentInfo {...args} fill="red.500" />
    <CommentInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
