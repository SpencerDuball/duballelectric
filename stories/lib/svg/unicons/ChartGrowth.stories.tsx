import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChartGrowth, ChartGrowthPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartGrowth",
  component: ChartGrowth,
} as ComponentMeta<typeof ChartGrowth>;

const Template: ComponentStory<typeof ChartGrowth> = (
  args: ChartGrowthPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ChartGrowth {...args} />
    <ChartGrowth {...args} fill="red.500" />
    <ChartGrowth {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
