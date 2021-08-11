import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Hourglass, HourglassPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Hourglass",
  component: Hourglass,
} as ComponentMeta<typeof Hourglass>;

const Template: ComponentStory<typeof Hourglass> = (args: HourglassPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Hourglass {...args} />
    <Hourglass {...args} fill="red.500" />
    <Hourglass {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
