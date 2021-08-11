import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Language, LanguagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Language",
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = (args: LanguagePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Language {...args} />
    <Language {...args} fill="red.500" />
    <Language {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
