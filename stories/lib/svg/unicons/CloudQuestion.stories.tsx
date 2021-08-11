import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudQuestion, CloudQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudQuestion",
  component: CloudQuestion,
} as ComponentMeta<typeof CloudQuestion>;

const Template: ComponentStory<typeof CloudQuestion> = (
  args: CloudQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudQuestion {...args} />
    <CloudQuestion {...args} fill="red.500" />
    <CloudQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
