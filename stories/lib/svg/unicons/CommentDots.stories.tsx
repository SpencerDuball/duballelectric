import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentDots, CommentDotsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentDots",
  component: CommentDots,
} as ComponentMeta<typeof CommentDots>;

const Template: ComponentStory<typeof CommentDots> = (
  args: CommentDotsPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentDots {...args} />
    <CommentDots {...args} fill="red.500" />
    <CommentDots {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
