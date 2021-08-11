import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BatteryEmpty, BatteryEmptyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BatteryEmpty",
  component: BatteryEmpty,
} as ComponentMeta<typeof BatteryEmpty>;

const Template: ComponentStory<typeof BatteryEmpty> = (
  args: BatteryEmptyPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BatteryEmpty {...args} />
    <BatteryEmpty {...args} fill="red.500" />
    <BatteryEmpty {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
