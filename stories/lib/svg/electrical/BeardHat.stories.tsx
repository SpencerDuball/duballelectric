import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BeardHat, BeardHatPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/BeardHat",
  component: BeardHat,
} as ComponentMeta<typeof BeardHat>;

const Template: ComponentStory<typeof BeardHat> = (args: BeardHatPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BeardHat {...args} />
    <BeardHat {...args} fill="red.500" />
    <BeardHat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
