import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Trowel, TrowelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Trowel",
  component: Trowel,
} as ComponentMeta<typeof Trowel>;

const Template: ComponentStory<typeof Trowel> = (args: TrowelPropsI) => (
  <Box display="flex" gap="20px">
    <Trowel {...args} />
    <Trowel {...args} fill="red.500" />
    <Trowel {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
