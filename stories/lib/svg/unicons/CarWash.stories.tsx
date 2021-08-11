import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CarWash, CarWashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CarWash",
  component: CarWash,
} as ComponentMeta<typeof CarWash>;

const Template: ComponentStory<typeof CarWash> = (args: CarWashPropsI) => (
  <Box display="flex" gap="20px">
    <CarWash {...args} />
    <CarWash {...args} fill="red.500" />
    <CarWash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
