import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChartBarAlt, ChartBarAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartBarAlt",
  component: ChartBarAlt,
} as ComponentMeta<typeof ChartBarAlt>;

const Template: ComponentStory<typeof ChartBarAlt> = (
  args: ChartBarAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ChartBarAlt {...args} />
    <ChartBarAlt {...args} fill="red.500" />
    <ChartBarAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
