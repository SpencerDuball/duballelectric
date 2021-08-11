import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wind, WindPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wind",
  component: Wind,
} as ComponentMeta<typeof Wind>;

const Template: ComponentStory<typeof Wind> = (args: WindPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Wind {...args} />
    <Wind {...args} fill="red.500" />
    <Wind {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
