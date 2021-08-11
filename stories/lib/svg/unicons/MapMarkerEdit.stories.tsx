import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerEdit, MapMarkerEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerEdit",
  component: MapMarkerEdit,
} as ComponentMeta<typeof MapMarkerEdit>;

const Template: ComponentStory<typeof MapMarkerEdit> = (
  args: MapMarkerEditPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MapMarkerEdit {...args} />
    <MapMarkerEdit {...args} fill="red.500" />
    <MapMarkerEdit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
