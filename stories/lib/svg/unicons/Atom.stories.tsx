import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Atom, AtomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Atom",
  component: Atom,
} as ComponentMeta<typeof Atom>;

const Template: ComponentStory<typeof Atom> = (args: AtomPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Atom {...args} />
    <Atom {...args} fill="red.500" />
    <Atom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
