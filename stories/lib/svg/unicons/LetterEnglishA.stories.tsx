import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LetterEnglishA, LetterEnglishAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterEnglishA",
  component: LetterEnglishA,
} as ComponentMeta<typeof LetterEnglishA>;

const Template: ComponentStory<typeof LetterEnglishA> = (
  args: LetterEnglishAPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LetterEnglishA {...args} />
    <LetterEnglishA {...args} fill="red.500" />
    <LetterEnglishA {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
