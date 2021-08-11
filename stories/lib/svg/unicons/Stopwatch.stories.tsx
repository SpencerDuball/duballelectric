import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Stopwatch, StopwatchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Stopwatch",
  component: Stopwatch,
} as ComponentMeta<typeof Stopwatch>;

const Template: ComponentStory<typeof Stopwatch> = (args: StopwatchPropsI) => (
  <Box display="flex" gap="20px">
    <Stopwatch {...args} />
    <Stopwatch {...args} fill="red.500" />
    <Stopwatch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
