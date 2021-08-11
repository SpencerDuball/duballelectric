import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerMinus, MapMarkerMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerMinus",
  component: MapMarkerMinus,
} as ComponentMeta<typeof MapMarkerMinus>;

const Template: ComponentStory<typeof MapMarkerMinus> = (
  args: MapMarkerMinusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MapMarkerMinus {...args} />
    <MapMarkerMinus {...args} fill="red.500" />
    <MapMarkerMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
