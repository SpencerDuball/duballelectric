import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Minus, MinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Minus",
  component: Minus,
} as ComponentMeta<typeof Minus>;

const Template: ComponentStory<typeof Minus> = (args: MinusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Minus {...args} />
    <Minus {...args} fill="red.500" />
    <Minus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
