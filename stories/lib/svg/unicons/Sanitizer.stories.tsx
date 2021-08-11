import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sanitizer, SanitizerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sanitizer",
  component: Sanitizer,
} as ComponentMeta<typeof Sanitizer>;

const Template: ComponentStory<typeof Sanitizer> = (args: SanitizerPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sanitizer {...args} />
    <Sanitizer {...args} fill="red.500" />
    <Sanitizer {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
