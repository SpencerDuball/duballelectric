import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowGrowth, ArrowGrowthPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowGrowth",
  component: ArrowGrowth,
} as ComponentMeta<typeof ArrowGrowth>;

const Template: ComponentStory<typeof ArrowGrowth> = (
  args: ArrowGrowthPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowGrowth {...args} />
    <ArrowGrowth {...args} fill="red.500" />
    <ArrowGrowth {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
