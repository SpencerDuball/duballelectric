import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderQuestion, FolderQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderQuestion",
  component: FolderQuestion,
} as ComponentMeta<typeof FolderQuestion>;

const Template: ComponentStory<typeof FolderQuestion> = (
  args: FolderQuestionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FolderQuestion {...args} />
    <FolderQuestion {...args} fill="red.500" />
    <FolderQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
