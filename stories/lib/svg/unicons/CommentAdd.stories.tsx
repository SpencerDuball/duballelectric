import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAdd, CommentAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAdd",
  component: CommentAdd,
} as ComponentMeta<typeof CommentAdd>;

const Template: ComponentStory<typeof CommentAdd> = (
  args: CommentAddPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAdd {...args} />
    <CommentAdd {...args} fill="red.500" />
    <CommentAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
