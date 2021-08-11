import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Clock, ClockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Clock",
  component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args: ClockPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Clock {...args} />
    <Clock {...args} fill="red.500" />
    <Clock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
