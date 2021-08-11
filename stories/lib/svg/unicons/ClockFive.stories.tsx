import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockFive, ClockFivePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockFive",
  component: ClockFive,
} as ComponentMeta<typeof ClockFive>;

const Template: ComponentStory<typeof ClockFive> = (args: ClockFivePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ClockFive {...args} />
    <ClockFive {...args} fill="red.500" />
    <ClockFive {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
