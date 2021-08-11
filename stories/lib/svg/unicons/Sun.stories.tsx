import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sun, SunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sun",
  component: Sun,
} as ComponentMeta<typeof Sun>;

const Template: ComponentStory<typeof Sun> = (args: SunPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sun {...args} />
    <Sun {...args} fill="red.500" />
    <Sun {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
