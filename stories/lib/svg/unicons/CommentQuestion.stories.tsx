import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentQuestion, CommentQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentQuestion",
  component: CommentQuestion,
} as ComponentMeta<typeof CommentQuestion>;

const Template: ComponentStory<typeof CommentQuestion> = (
  args: CommentQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentQuestion {...args} />
    <CommentQuestion {...args} fill="red.500" />
    <CommentQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
