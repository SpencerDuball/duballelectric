import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentInfoAlt, CommentInfoAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentInfoAlt",
  component: CommentInfoAlt,
} as ComponentMeta<typeof CommentInfoAlt>;

const Template: ComponentStory<typeof CommentInfoAlt> = (
  args: CommentInfoAltPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentInfoAlt {...args} />
    <CommentInfoAlt {...args} fill="red.500" />
    <CommentInfoAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
