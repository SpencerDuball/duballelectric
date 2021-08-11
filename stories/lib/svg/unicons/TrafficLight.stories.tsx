import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TrafficLight, TrafficLightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrafficLight",
  component: TrafficLight,
} as ComponentMeta<typeof TrafficLight>;

const Template: ComponentStory<typeof TrafficLight> = (
  args: TrafficLightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TrafficLight {...args} />
    <TrafficLight {...args} fill="red.500" />
    <TrafficLight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
