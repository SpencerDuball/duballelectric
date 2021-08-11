import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Brain, BrainPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Brain",
  component: Brain,
} as ComponentMeta<typeof Brain>;

const Template: ComponentStory<typeof Brain> = (args: BrainPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Brain {...args} />
    <Brain {...args} fill="red.500" />
    <Brain {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
