import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentPlus, CommentPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentPlus",
  component: CommentPlus,
} as ComponentMeta<typeof CommentPlus>;

const Template: ComponentStory<typeof CommentPlus> = (
  args: CommentPlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentPlus {...args} />
    <CommentPlus {...args} fill="red.500" />
    <CommentPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
