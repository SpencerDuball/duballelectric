import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentSearch, CommentSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentSearch",
  component: CommentSearch,
} as ComponentMeta<typeof CommentSearch>;

const Template: ComponentStory<typeof CommentSearch> = (
  args: CommentSearchPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentSearch {...args} />
    <CommentSearch {...args} fill="red.500" />
    <CommentSearch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
