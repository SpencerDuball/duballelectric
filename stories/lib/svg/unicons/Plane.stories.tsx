import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Plane, PlanePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Plane",
  component: Plane,
} as ComponentMeta<typeof Plane>;

const Template: ComponentStory<typeof Plane> = (args: PlanePropsI) => (
  <Box display="flex" gap="20px">
    <Plane {...args} />
    <Plane {...args} fill="red.500" />
    <Plane {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
