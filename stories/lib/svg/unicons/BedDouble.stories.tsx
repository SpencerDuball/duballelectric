import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BedDouble, BedDoublePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BedDouble",
  component: BedDouble,
} as ComponentMeta<typeof BedDouble>;

const Template: ComponentStory<typeof BedDouble> = (args: BedDoublePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BedDouble {...args} />
    <BedDouble {...args} fill="red.500" />
    <BedDouble {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
