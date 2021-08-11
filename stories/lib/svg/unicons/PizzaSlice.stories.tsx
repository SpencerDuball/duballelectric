import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PizzaSlice, PizzaSlicePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PizzaSlice",
  component: PizzaSlice,
} as ComponentMeta<typeof PizzaSlice>;

const Template: ComponentStory<typeof PizzaSlice> = (
  args: PizzaSlicePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PizzaSlice {...args} />
    <PizzaSlice {...args} fill="red.500" />
    <PizzaSlice {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
