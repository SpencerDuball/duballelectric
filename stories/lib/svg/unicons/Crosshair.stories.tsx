import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Crosshair, CrosshairPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Crosshair",
  component: Crosshair,
} as ComponentMeta<typeof Crosshair>;

const Template: ComponentStory<typeof Crosshair> = (args: CrosshairPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Crosshair {...args} />
    <Crosshair {...args} fill="red.500" />
    <Crosshair {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
