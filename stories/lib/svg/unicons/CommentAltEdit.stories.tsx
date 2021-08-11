import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltEdit, CommentAltEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltEdit",
  component: CommentAltEdit,
} as ComponentMeta<typeof CommentAltEdit>;

const Template: ComponentStory<typeof CommentAltEdit> = (
  args: CommentAltEditPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CommentAltEdit {...args} />
    <CommentAltEdit {...args} fill="red.500" />
    <CommentAltEdit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
