import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileQuestionAlt, FileQuestionAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileQuestionAlt",
  component: FileQuestionAlt,
} as ComponentMeta<typeof FileQuestionAlt>;

const Template: ComponentStory<typeof FileQuestionAlt> = (
  args: FileQuestionAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileQuestionAlt {...args} />
    <FileQuestionAlt {...args} fill="red.500" />
    <FileQuestionAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
