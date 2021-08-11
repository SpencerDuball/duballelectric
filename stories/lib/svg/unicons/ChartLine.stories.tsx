import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChartLine, ChartLinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartLine",
  component: ChartLine,
} as ComponentMeta<typeof ChartLine>;

const Template: ComponentStory<typeof ChartLine> = (args: ChartLinePropsI) => (
  <Box display="flex" gap="20px">
    <ChartLine {...args} />
    <ChartLine {...args} fill="red.500" />
    <ChartLine {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
