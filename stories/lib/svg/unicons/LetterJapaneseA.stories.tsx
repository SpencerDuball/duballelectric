import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LetterJapaneseA, LetterJapaneseAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterJapaneseA",
  component: LetterJapaneseA,
} as ComponentMeta<typeof LetterJapaneseA>;

const Template: ComponentStory<typeof LetterJapaneseA> = (
  args: LetterJapaneseAPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LetterJapaneseA {...args} />
    <LetterJapaneseA {...args} fill="red.500" />
    <LetterJapaneseA {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
