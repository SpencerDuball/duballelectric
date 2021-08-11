import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltLines, CommentAltLinesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltLines",
  component: CommentAltLines,
} as ComponentMeta<typeof CommentAltLines>;

const Template: ComponentStory<typeof CommentAltLines> = (
  args: CommentAltLinesPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltLines {...args} />
    <CommentAltLines {...args} fill="red.500" />
    <CommentAltLines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
