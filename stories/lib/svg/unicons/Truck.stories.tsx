import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Truck, TruckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Truck",
  component: Truck,
} as ComponentMeta<typeof Truck>;

const Template: ComponentStory<typeof Truck> = (args: TruckPropsI) => (
  <Box display="flex" gap="20px">
    <Truck {...args} />
    <Truck {...args} fill="red.500" />
    <Truck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
