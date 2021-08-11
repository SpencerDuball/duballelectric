import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Ship, ShipPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ship",
  component: Ship,
} as ComponentMeta<typeof Ship>;

const Template: ComponentStory<typeof Ship> = (args: ShipPropsI) => (
  <Box display="flex" gap="20px">
    <Ship {...args} />
    <Ship {...args} fill="red.500" />
    <Ship {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
