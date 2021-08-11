import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentRedo, CommentRedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentRedo",
  component: CommentRedo,
} as ComponentMeta<typeof CommentRedo>;

const Template: ComponentStory<typeof CommentRedo> = (
  args: CommentRedoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentRedo {...args} />
    <CommentRedo {...args} fill="red.500" />
    <CommentRedo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
