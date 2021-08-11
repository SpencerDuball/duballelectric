import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DollarAlt, DollarAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DollarAlt",
  component: DollarAlt,
} as ComponentMeta<typeof DollarAlt>;

const Template: ComponentStory<typeof DollarAlt> = (args: DollarAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DollarAlt {...args} />
    <DollarAlt {...args} fill="red.500" />
    <DollarAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
