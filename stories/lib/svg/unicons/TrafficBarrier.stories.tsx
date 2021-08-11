import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TrafficBarrier, TrafficBarrierPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrafficBarrier",
  component: TrafficBarrier,
} as ComponentMeta<typeof TrafficBarrier>;

const Template: ComponentStory<typeof TrafficBarrier> = (
  args: TrafficBarrierPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TrafficBarrier {...args} />
    <TrafficBarrier {...args} fill="red.500" />
    <TrafficBarrier {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
