import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Estate, EstatePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Estate",
  component: Estate,
} as ComponentMeta<typeof Estate>;

const Template: ComponentStory<typeof Estate> = (args: EstatePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Estate {...args} />
    <Estate {...args} fill="red.500" />
    <Estate {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
