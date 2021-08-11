import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerPlus, MapMarkerPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerPlus",
  component: MapMarkerPlus,
} as ComponentMeta<typeof MapMarkerPlus>;

const Template: ComponentStory<typeof MapMarkerPlus> = (
  args: MapMarkerPlusPropsI
) => (
  <Box display="flex" gap="20px">
    <MapMarkerPlus {...args} />
    <MapMarkerPlus {...args} fill="red.500" />
    <MapMarkerPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
