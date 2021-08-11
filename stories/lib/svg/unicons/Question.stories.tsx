import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Question, QuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Question",
  component: Question,
} as ComponentMeta<typeof Question>;

const Template: ComponentStory<typeof Question> = (args: QuestionPropsI) => (
  <Box display="flex" gap="20px">
    <Question {...args} />
    <Question {...args} fill="red.500" />
    <Question {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
