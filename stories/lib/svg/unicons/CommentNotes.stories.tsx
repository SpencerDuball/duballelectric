import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentNotes, CommentNotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentNotes",
  component: CommentNotes,
} as ComponentMeta<typeof CommentNotes>;

const Template: ComponentStory<typeof CommentNotes> = (
  args: CommentNotesPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentNotes {...args} />
    <CommentNotes {...args} fill="red.500" />
    <CommentNotes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
