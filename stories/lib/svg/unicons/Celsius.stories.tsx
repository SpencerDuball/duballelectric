import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Celsius, CelsiusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Celsius",
  component: Celsius,
} as ComponentMeta<typeof Celsius>;

const Template: ComponentStory<typeof Celsius> = (args: CelsiusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Celsius {...args} />
    <Celsius {...args} fill="red.500" />
    <Celsius {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
