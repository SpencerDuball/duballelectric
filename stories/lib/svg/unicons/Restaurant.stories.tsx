import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Restaurant, RestaurantPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Restaurant",
  component: Restaurant,
} as ComponentMeta<typeof Restaurant>;

const Template: ComponentStory<typeof Restaurant> = (
  args: RestaurantPropsI
) => (
  <Box display="flex" gap="20px">
    <Restaurant {...args} />
    <Restaurant {...args} fill="red.500" />
    <Restaurant {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
