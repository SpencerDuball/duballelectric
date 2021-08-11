import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Football, FootballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Football",
  component: Football,
} as ComponentMeta<typeof Football>;

const Template: ComponentStory<typeof Football> = (args: FootballPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Football {...args} />
    <Football {...args} fill="red.500" />
    <Football {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
