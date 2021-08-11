import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShoppingBasket, ShoppingBasketPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShoppingBasket",
  component: ShoppingBasket,
} as ComponentMeta<typeof ShoppingBasket>;

const Template: ComponentStory<typeof ShoppingBasket> = (
  args: ShoppingBasketPropsI
) => (
  <Box display="flex" gap="20px">
    <ShoppingBasket {...args} />
    <ShoppingBasket {...args} fill="red.500" />
    <ShoppingBasket {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
