import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Chart, ChartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args: ChartPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Chart {...args} />
    <Chart {...args} fill="red.500" />
    <Chart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
