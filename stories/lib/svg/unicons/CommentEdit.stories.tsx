import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentEdit, CommentEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentEdit",
  component: CommentEdit,
} as ComponentMeta<typeof CommentEdit>;

const Template: ComponentStory<typeof CommentEdit> = (
  args: CommentEditPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentEdit {...args} />
    <CommentEdit {...args} fill="red.500" />
    <CommentEdit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
