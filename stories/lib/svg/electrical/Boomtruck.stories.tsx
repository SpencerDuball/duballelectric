import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Boomtruck, BoomtruckPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Boomtruck",
  component: Boomtruck,
} as ComponentMeta<typeof Boomtruck>;

const Template: ComponentStory<typeof Boomtruck> = (args: BoomtruckPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Boomtruck {...args} />
    <Boomtruck {...args} fill="red.500" />
    <Boomtruck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
