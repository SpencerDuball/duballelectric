import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentImage, CommentImagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentImage",
  component: CommentImage,
} as ComponentMeta<typeof CommentImage>;

const Template: ComponentStory<typeof CommentImage> = (
  args: CommentImagePropsI
) => (
  <Box display="flex" gap="20px">
    <CommentImage {...args} />
    <CommentImage {...args} fill="red.500" />
    <CommentImage {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
