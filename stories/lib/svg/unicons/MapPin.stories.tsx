import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapPin, MapPinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapPin",
  component: MapPin,
} as ComponentMeta<typeof MapPin>;

const Template: ComponentStory<typeof MapPin> = (args: MapPinPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <MapPin {...args} />
    <MapPin {...args} fill="red.500" />
    <MapPin {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
