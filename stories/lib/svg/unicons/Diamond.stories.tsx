import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Diamond, DiamondPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Diamond",
  component: Diamond,
} as ComponentMeta<typeof Diamond>;

const Template: ComponentStory<typeof Diamond> = (args: DiamondPropsI) => (
  <Box display="flex" gap="20px">
    <Diamond {...args} />
    <Diamond {...args} fill="red.500" />
    <Diamond {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
