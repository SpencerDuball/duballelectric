import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Abacus, AbacusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Abacus",
  component: Abacus,
} as ComponentMeta<typeof Abacus>;

const Template: ComponentStory<typeof Abacus> = (args: AbacusPropsI) => (
  <Box display="flex" gap="20px">
    <Abacus {...args} />
    <Abacus {...args} fill="red.500" />
    <Abacus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
