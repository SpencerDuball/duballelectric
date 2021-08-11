import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShoppingCartAlt, ShoppingCartAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShoppingCartAlt",
  component: ShoppingCartAlt,
} as ComponentMeta<typeof ShoppingCartAlt>;

const Template: ComponentStory<typeof ShoppingCartAlt> = (
  args: ShoppingCartAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ShoppingCartAlt {...args} />
    <ShoppingCartAlt {...args} fill="red.500" />
    <ShoppingCartAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
