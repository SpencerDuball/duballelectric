import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarker, MapMarkerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarker",
  component: MapMarker,
} as ComponentMeta<typeof MapMarker>;

const Template: ComponentStory<typeof MapMarker> = (args: MapMarkerPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <MapMarker {...args} />
    <MapMarker {...args} fill="red.500" />
    <MapMarker {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
