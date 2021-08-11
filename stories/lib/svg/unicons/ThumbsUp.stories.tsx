import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ThumbsUp, ThumbsUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThumbsUp",
  component: ThumbsUp,
} as ComponentMeta<typeof ThumbsUp>;

const Template: ComponentStory<typeof ThumbsUp> = (args: ThumbsUpPropsI) => (
  <Box display="flex" gap="20px">
    <ThumbsUp {...args} />
    <ThumbsUp {...args} fill="red.500" />
    <ThumbsUp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
