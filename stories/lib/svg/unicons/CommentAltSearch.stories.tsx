import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltSearch, CommentAltSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltSearch",
  component: CommentAltSearch,
} as ComponentMeta<typeof CommentAltSearch>;

const Template: ComponentStory<typeof CommentAltSearch> = (
  args: CommentAltSearchPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltSearch {...args} />
    <CommentAltSearch {...args} fill="red.500" />
    <CommentAltSearch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
