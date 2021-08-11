import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChartBar, ChartBarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartBar",
  component: ChartBar,
} as ComponentMeta<typeof ChartBar>;

const Template: ComponentStory<typeof ChartBar> = (args: ChartBarPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ChartBar {...args} />
    <ChartBar {...args} fill="red.500" />
    <ChartBar {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
