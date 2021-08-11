import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Basketball, BasketballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Basketball",
  component: Basketball,
} as ComponentMeta<typeof Basketball>;

const Template: ComponentStory<typeof Basketball> = (
  args: BasketballPropsI
) => (
  <Box display="flex" gap="20px">
    <Basketball {...args} />
    <Basketball {...args} fill="red.500" />
    <Basketball {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
