import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerShield, MapMarkerShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerShield",
  component: MapMarkerShield,
} as ComponentMeta<typeof MapMarkerShield>;

const Template: ComponentStory<typeof MapMarkerShield> = (
  args: MapMarkerShieldPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MapMarkerShield {...args} />
    <MapMarkerShield {...args} fill="red.500" />
    <MapMarkerShield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
