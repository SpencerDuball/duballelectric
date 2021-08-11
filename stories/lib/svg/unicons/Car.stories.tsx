import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Car, CarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Car",
  component: Car,
} as ComponentMeta<typeof Car>;

const Template: ComponentStory<typeof Car> = (args: CarPropsI) => (
  <Box display="flex" gap="20px">
    <Car {...args} />
    <Car {...args} fill="red.500" />
    <Car {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
