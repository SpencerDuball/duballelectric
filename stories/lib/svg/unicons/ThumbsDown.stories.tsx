import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ThumbsDown, ThumbsDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThumbsDown",
  component: ThumbsDown,
} as ComponentMeta<typeof ThumbsDown>;

const Template: ComponentStory<typeof ThumbsDown> = (
  args: ThumbsDownPropsI
) => (
  <Box display="flex" gap="20px">
    <ThumbsDown {...args} />
    <ThumbsDown {...args} fill="red.500" />
    <ThumbsDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
