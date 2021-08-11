import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileQuestion, FileQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileQuestion",
  component: FileQuestion,
} as ComponentMeta<typeof FileQuestion>;

const Template: ComponentStory<typeof FileQuestion> = (
  args: FileQuestionPropsI
) => (
  <Box display="flex" gap="20px">
    <FileQuestion {...args} />
    <FileQuestion {...args} fill="red.500" />
    <FileQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
