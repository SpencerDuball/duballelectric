import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Direction, DirectionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Direction",
  component: Direction,
} as ComponentMeta<typeof Direction>;

const Template: ComponentStory<typeof Direction> = (args: DirectionPropsI) => (
  <Box display="flex" gap="20px">
    <Direction {...args} />
    <Direction {...args} fill="red.500" />
    <Direction {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
