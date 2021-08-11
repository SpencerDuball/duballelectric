import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentBlock, CommentBlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentBlock",
  component: CommentBlock,
} as ComponentMeta<typeof CommentBlock>;

const Template: ComponentStory<typeof CommentBlock> = (
  args: CommentBlockPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentBlock {...args} />
    <CommentBlock {...args} fill="red.500" />
    <CommentBlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
