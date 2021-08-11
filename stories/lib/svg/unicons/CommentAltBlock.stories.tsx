import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltBlock, CommentAltBlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltBlock",
  component: CommentAltBlock,
} as ComponentMeta<typeof CommentAltBlock>;

const Template: ComponentStory<typeof CommentAltBlock> = (
  args: CommentAltBlockPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltBlock {...args} />
    <CommentAltBlock {...args} fill="red.500" />
    <CommentAltBlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
