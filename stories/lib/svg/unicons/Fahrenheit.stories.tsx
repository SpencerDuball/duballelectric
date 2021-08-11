import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Fahrenheit, FahrenheitPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Fahrenheit",
  component: Fahrenheit,
} as ComponentMeta<typeof Fahrenheit>;

const Template: ComponentStory<typeof Fahrenheit> = (
  args: FahrenheitPropsI
) => (
  <Box display="flex" gap="20px">
    <Fahrenheit {...args} />
    <Fahrenheit {...args} fill="red.500" />
    <Fahrenheit {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
