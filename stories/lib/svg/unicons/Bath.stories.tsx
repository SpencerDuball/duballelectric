import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bath, BathPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bath",
  component: Bath,
} as ComponentMeta<typeof Bath>;

const Template: ComponentStory<typeof Bath> = (args: BathPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bath {...args} />
    <Bath {...args} fill="red.500" />
    <Bath {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
