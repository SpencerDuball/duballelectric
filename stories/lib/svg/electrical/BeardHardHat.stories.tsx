import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BeardHardHat, BeardHardHatPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/BeardHardHat",
  component: BeardHardHat,
} as ComponentMeta<typeof BeardHardHat>;

const Template: ComponentStory<typeof BeardHardHat> = (
  args: BeardHardHatPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BeardHardHat {...args} />
    <BeardHardHat {...args} fill="red.500" />
    <BeardHardHat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
