import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltShield, CommentAltShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltShield",
  component: CommentAltShield,
} as ComponentMeta<typeof CommentAltShield>;

const Template: ComponentStory<typeof CommentAltShield> = (
  args: CommentAltShieldPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltShield {...args} />
    <CommentAltShield {...args} fill="red.500" />
    <CommentAltShield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
