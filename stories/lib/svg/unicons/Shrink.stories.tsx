import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Shrink, ShrinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shrink",
  component: Shrink,
} as ComponentMeta<typeof Shrink>;

const Template: ComponentStory<typeof Shrink> = (args: ShrinkPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Shrink {...args} />
    <Shrink {...args} fill="red.500" />
    <Shrink {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
