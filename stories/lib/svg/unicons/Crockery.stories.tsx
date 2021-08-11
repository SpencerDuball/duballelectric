import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Crockery, CrockeryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Crockery",
  component: Crockery,
} as ComponentMeta<typeof Crockery>;

const Template: ComponentStory<typeof Crockery> = (args: CrockeryPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Crockery {...args} />
    <Crockery {...args} fill="red.500" />
    <Crockery {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
