import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LetterHindiA, LetterHindiAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterHindiA",
  component: LetterHindiA,
} as ComponentMeta<typeof LetterHindiA>;

const Template: ComponentStory<typeof LetterHindiA> = (
  args: LetterHindiAPropsI
) => (
  <Box display="flex" gap="20px">
    <LetterHindiA {...args} />
    <LetterHindiA {...args} fill="red.500" />
    <LetterHindiA {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
