import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltQuestion, CommentAltQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltQuestion",
  component: CommentAltQuestion,
} as ComponentMeta<typeof CommentAltQuestion>;

const Template: ComponentStory<typeof CommentAltQuestion> = (
  args: CommentAltQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltQuestion {...args} />
    <CommentAltQuestion {...args} fill="red.500" />
    <CommentAltQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
