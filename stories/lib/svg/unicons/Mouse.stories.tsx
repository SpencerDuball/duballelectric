import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Mouse, MousePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Mouse",
  component: Mouse,
} as ComponentMeta<typeof Mouse>;

const Template: ComponentStory<typeof Mouse> = (args: MousePropsI) => (
  <Box display="flex" gap="20px">
    <Mouse {...args} />
    <Mouse {...args} fill="red.500" />
    <Mouse {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
