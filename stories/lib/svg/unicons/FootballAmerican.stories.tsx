import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FootballAmerican, FootballAmericanPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FootballAmerican",
  component: FootballAmerican,
} as ComponentMeta<typeof FootballAmerican>;

const Template: ComponentStory<typeof FootballAmerican> = (
  args: FootballAmericanPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FootballAmerican {...args} />
    <FootballAmerican {...args} fill="red.500" />
    <FootballAmerican {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
