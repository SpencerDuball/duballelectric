import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltInfo, CommentAltInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltInfo",
  component: CommentAltInfo,
} as ComponentMeta<typeof CommentAltInfo>;

const Template: ComponentStory<typeof CommentAltInfo> = (
  args: CommentAltInfoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltInfo {...args} />
    <CommentAltInfo {...args} fill="red.500" />
    <CommentAltInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
