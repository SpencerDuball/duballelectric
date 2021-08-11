import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltShare, CommentAltSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltShare",
  component: CommentAltShare,
} as ComponentMeta<typeof CommentAltShare>;

const Template: ComponentStory<typeof CommentAltShare> = (
  args: CommentAltSharePropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltShare {...args} />
    <CommentAltShare {...args} fill="red.500" />
    <CommentAltShare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
