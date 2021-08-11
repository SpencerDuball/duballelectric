import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltNotes, CommentAltNotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltNotes",
  component: CommentAltNotes,
} as ComponentMeta<typeof CommentAltNotes>;

const Template: ComponentStory<typeof CommentAltNotes> = (
  args: CommentAltNotesPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltNotes {...args} />
    <CommentAltNotes {...args} fill="red.500" />
    <CommentAltNotes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
