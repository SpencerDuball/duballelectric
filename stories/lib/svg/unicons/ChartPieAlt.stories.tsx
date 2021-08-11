import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChartPieAlt, ChartPieAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartPieAlt",
  component: ChartPieAlt,
} as ComponentMeta<typeof ChartPieAlt>;

const Template: ComponentStory<typeof ChartPieAlt> = (
  args: ChartPieAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ChartPieAlt {...args} />
    <ChartPieAlt {...args} fill="red.500" />
    <ChartPieAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
