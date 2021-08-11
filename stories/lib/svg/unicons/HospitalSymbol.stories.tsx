import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HospitalSymbol, HospitalSymbolPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HospitalSymbol",
  component: HospitalSymbol,
} as ComponentMeta<typeof HospitalSymbol>;

const Template: ComponentStory<typeof HospitalSymbol> = (
  args: HospitalSymbolPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HospitalSymbol {...args} />
    <HospitalSymbol {...args} fill="red.500" />
    <HospitalSymbol {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
