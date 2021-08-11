import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Crosshairs, CrosshairsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Crosshairs",
  component: Crosshairs,
} as ComponentMeta<typeof Crosshairs>;

const Template: ComponentStory<typeof Crosshairs> = (
  args: CrosshairsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Crosshairs {...args} />
    <Crosshairs {...args} fill="red.500" />
    <Crosshairs {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
