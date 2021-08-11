import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentLines, CommentLinesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentLines",
  component: CommentLines,
} as ComponentMeta<typeof CommentLines>;

const Template: ComponentStory<typeof CommentLines> = (
  args: CommentLinesPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentLines {...args} />
    <CommentLines {...args} fill="red.500" />
    <CommentLines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
