import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsH, ArrowsHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsH",
  component: ArrowsH,
} as ComponentMeta<typeof ArrowsH>;

const Template: ComponentStory<typeof ArrowsH> = (args: ArrowsHPropsI) => (
  <Box display="flex" gap="20px">
    <ArrowsH {...args} />
    <ArrowsH {...args} fill="red.500" />
    <ArrowsH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
