import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Water, WaterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Water",
  component: Water,
} as ComponentMeta<typeof Water>;

const Template: ComponentStory<typeof Water> = (args: WaterPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Water {...args} />
    <Water {...args} fill="red.500" />
    <Water {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
