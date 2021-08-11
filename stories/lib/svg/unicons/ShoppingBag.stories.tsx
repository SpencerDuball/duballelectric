import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShoppingBag, ShoppingBagPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShoppingBag",
  component: ShoppingBag,
} as ComponentMeta<typeof ShoppingBag>;

const Template: ComponentStory<typeof ShoppingBag> = (
  args: ShoppingBagPropsI
) => (
  <Box display="flex" gap="20px">
    <ShoppingBag {...args} />
    <ShoppingBag {...args} fill="red.500" />
    <ShoppingBag {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
