import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Frown, FrownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Frown",
  component: Frown,
} as ComponentMeta<typeof Frown>;

const Template: ComponentStory<typeof Frown> = (args: FrownPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Frown {...args} />
    <Frown {...args} fill="red.500" />
    <Frown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
