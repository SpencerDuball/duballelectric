import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LocationPinAlt, LocationPinAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LocationPinAlt",
  component: LocationPinAlt,
} as ComponentMeta<typeof LocationPinAlt>;

const Template: ComponentStory<typeof LocationPinAlt> = (
  args: LocationPinAltPropsI
) => (
  <Box display="flex" gap="20px">
    <LocationPinAlt {...args} />
    <LocationPinAlt {...args} fill="red.500" />
    <LocationPinAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
