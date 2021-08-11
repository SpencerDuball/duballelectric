import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BusAlt, BusAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BusAlt",
  component: BusAlt,
} as ComponentMeta<typeof BusAlt>;

const Template: ComponentStory<typeof BusAlt> = (args: BusAltPropsI) => (
  <Box display="flex" gap="20px">
    <BusAlt {...args} />
    <BusAlt {...args} fill="red.500" />
    <BusAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
