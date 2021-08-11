import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CarSlash, CarSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CarSlash",
  component: CarSlash,
} as ComponentMeta<typeof CarSlash>;

const Template: ComponentStory<typeof CarSlash> = (args: CarSlashPropsI) => (
  <Box display="flex" gap="20px">
    <CarSlash {...args} />
    <CarSlash {...args} fill="red.500" />
    <CarSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
