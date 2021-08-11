import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowUp, ArrowUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowUp",
  component: ArrowUp,
} as ComponentMeta<typeof ArrowUp>;

const Template: ComponentStory<typeof ArrowUp> = (args: ArrowUpPropsI) => (
  <Box display="flex" gap="20px">
    <ArrowUp {...args} />
    <ArrowUp {...args} fill="red.500" />
    <ArrowUp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
