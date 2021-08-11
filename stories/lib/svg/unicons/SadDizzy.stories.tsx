import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SadDizzy, SadDizzyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SadDizzy",
  component: SadDizzy,
} as ComponentMeta<typeof SadDizzy>;

const Template: ComponentStory<typeof SadDizzy> = (args: SadDizzyPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SadDizzy {...args} />
    <SadDizzy {...args} fill="red.500" />
    <SadDizzy {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
