import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  ProgrammingLanguage,
  ProgrammingLanguagePropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ProgrammingLanguage",
  component: ProgrammingLanguage,
} as ComponentMeta<typeof ProgrammingLanguage>;

const Template: ComponentStory<typeof ProgrammingLanguage> = (
  args: ProgrammingLanguagePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ProgrammingLanguage {...args} />
    <ProgrammingLanguage {...args} fill="red.500" />
    <ProgrammingLanguage {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
