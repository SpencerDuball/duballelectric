import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentCheck, CommentCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentCheck",
  component: CommentCheck,
} as ComponentMeta<typeof CommentCheck>;

const Template: ComponentStory<typeof CommentCheck> = (
  args: CommentCheckPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentCheck {...args} />
    <CommentCheck {...args} fill="red.500" />
    <CommentCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
