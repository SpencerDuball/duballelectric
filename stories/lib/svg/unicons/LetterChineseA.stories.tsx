import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LetterChineseA, LetterChineseAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterChineseA",
  component: LetterChineseA,
} as ComponentMeta<typeof LetterChineseA>;

const Template: ComponentStory<typeof LetterChineseA> = (
  args: LetterChineseAPropsI
) => (
  <Box display="flex" gap="20px">
    <LetterChineseA {...args} />
    <LetterChineseA {...args} fill="red.500" />
    <LetterChineseA {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
