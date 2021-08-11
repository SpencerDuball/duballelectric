import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Feedback, FeedbackPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Feedback",
  component: Feedback,
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = (args: FeedbackPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Feedback {...args} />
    <Feedback {...args} fill="red.500" />
    <Feedback {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
