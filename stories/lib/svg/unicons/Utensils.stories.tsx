import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Utensils, UtensilsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Utensils",
  component: Utensils,
} as ComponentMeta<typeof Utensils>;

const Template: ComponentStory<typeof Utensils> = (args: UtensilsPropsI) => (
  <Box display="flex" gap="20px">
    <Utensils {...args} />
    <Utensils {...args} fill="red.500" />
    <Utensils {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
