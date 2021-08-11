import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Comment, CommentPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args: CommentPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Comment {...args} />
    <Comment {...args} fill="red.500" />
    <Comment {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
