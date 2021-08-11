import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceFive, DiceFivePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceFive",
  component: DiceFive,
} as ComponentMeta<typeof DiceFive>;

const Template: ComponentStory<typeof DiceFive> = (args: DiceFivePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiceFive {...args} />
    <DiceFive {...args} fill="red.500" />
    <DiceFive {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
