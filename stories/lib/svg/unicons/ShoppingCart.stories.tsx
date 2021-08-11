import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShoppingCart, ShoppingCartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShoppingCart",
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (
  args: ShoppingCartPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ShoppingCart {...args} />
    <ShoppingCart {...args} fill="red.500" />
    <ShoppingCart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
