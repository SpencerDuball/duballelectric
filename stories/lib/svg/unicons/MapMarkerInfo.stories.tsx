import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerInfo, MapMarkerInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerInfo",
  component: MapMarkerInfo,
} as ComponentMeta<typeof MapMarkerInfo>;

const Template: ComponentStory<typeof MapMarkerInfo> = (
  args: MapMarkerInfoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MapMarkerInfo {...args} />
    <MapMarkerInfo {...args} fill="red.500" />
    <MapMarkerInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
