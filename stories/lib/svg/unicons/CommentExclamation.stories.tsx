import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentExclamation, CommentExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentExclamation",
  component: CommentExclamation,
} as ComponentMeta<typeof CommentExclamation>;

const Template: ComponentStory<typeof CommentExclamation> = (
  args: CommentExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentExclamation {...args} />
    <CommentExclamation {...args} fill="red.500" />
    <CommentExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
