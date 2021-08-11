import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Circle, CirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args: CirclePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Circle {...args} />
    <Circle {...args} fill="red.500" />
    <Circle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
