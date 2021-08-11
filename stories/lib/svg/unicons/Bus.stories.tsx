import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bus, BusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bus",
  component: Bus,
} as ComponentMeta<typeof Bus>;

const Template: ComponentStory<typeof Bus> = (args: BusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bus {...args} />
    <Bus {...args} fill="red.500" />
    <Bus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
