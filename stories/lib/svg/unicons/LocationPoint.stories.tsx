import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LocationPoint, LocationPointPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LocationPoint",
  component: LocationPoint,
} as ComponentMeta<typeof LocationPoint>;

const Template: ComponentStory<typeof LocationPoint> = (
  args: LocationPointPropsI
) => (
  <Box display="flex" gap="20px">
    <LocationPoint {...args} />
    <LocationPoint {...args} fill="red.500" />
    <LocationPoint {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
