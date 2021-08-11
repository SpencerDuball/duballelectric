import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageQuestion, ImageQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageQuestion",
  component: ImageQuestion,
} as ComponentMeta<typeof ImageQuestion>;

const Template: ComponentStory<typeof ImageQuestion> = (
  args: ImageQuestionPropsI
) => (
  <Box display="flex" gap="20px">
    <ImageQuestion {...args} />
    <ImageQuestion {...args} fill="red.500" />
    <ImageQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
