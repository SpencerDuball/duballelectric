import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Times, TimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Times",
  component: Times,
} as ComponentMeta<typeof Times>;

const Template: ComponentStory<typeof Times> = (args: TimesPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Times {...args} />
    <Times {...args} fill="red.500" />
    <Times {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
