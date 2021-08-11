import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Square, SquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Square",
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args: SquarePropsI) => (
  <Box display="flex" gap="20px">
    <Square {...args} />
    <Square {...args} fill="red.500" />
    <Square {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
