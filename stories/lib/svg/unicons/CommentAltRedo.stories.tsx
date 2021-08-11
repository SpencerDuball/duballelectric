import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltRedo, CommentAltRedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltRedo",
  component: CommentAltRedo,
} as ComponentMeta<typeof CommentAltRedo>;

const Template: ComponentStory<typeof CommentAltRedo> = (
  args: CommentAltRedoPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltRedo {...args} />
    <CommentAltRedo {...args} fill="red.500" />
    <CommentAltRedo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
