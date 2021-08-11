import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ParkingSquare, ParkingSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ParkingSquare",
  component: ParkingSquare,
} as ComponentMeta<typeof ParkingSquare>;

const Template: ComponentStory<typeof ParkingSquare> = (
  args: ParkingSquarePropsI
) => (
  <Box display="flex" gap="20px">
    <ParkingSquare {...args} />
    <ParkingSquare {...args} fill="red.500" />
    <ParkingSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
