import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TemperatureEmpty, TemperatureEmptyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureEmpty",
  component: TemperatureEmpty,
} as ComponentMeta<typeof TemperatureEmpty>;

const Template: ComponentStory<typeof TemperatureEmpty> = (
  args: TemperatureEmptyPropsI
) => (
  <Box display="flex" gap="20px">
    <TemperatureEmpty {...args} />
    <TemperatureEmpty {...args} fill="red.500" />
    <TemperatureEmpty {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
