import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsShrinkH, ArrowsShrinkHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsShrinkH",
  component: ArrowsShrinkH,
} as ComponentMeta<typeof ArrowsShrinkH>;

const Template: ComponentStory<typeof ArrowsShrinkH> = (
  args: ArrowsShrinkHPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowsShrinkH {...args} />
    <ArrowsShrinkH {...args} fill="red.500" />
    <ArrowsShrinkH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
