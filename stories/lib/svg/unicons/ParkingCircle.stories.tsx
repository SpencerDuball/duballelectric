import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ParkingCircle, ParkingCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ParkingCircle",
  component: ParkingCircle,
} as ComponentMeta<typeof ParkingCircle>;

const Template: ComponentStory<typeof ParkingCircle> = (
  args: ParkingCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <ParkingCircle {...args} />
    <ParkingCircle {...args} fill="red.500" />
    <ParkingCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
