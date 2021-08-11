import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Coffee, CoffeePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Coffee",
  component: Coffee,
} as ComponentMeta<typeof Coffee>;

const Template: ComponentStory<typeof Coffee> = (args: CoffeePropsI) => (
  <Box display="flex" gap="20px">
    <Coffee {...args} />
    <Coffee {...args} fill="red.500" />
    <Coffee {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
