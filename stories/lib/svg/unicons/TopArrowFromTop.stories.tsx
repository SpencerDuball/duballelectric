import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TopArrowFromTop, TopArrowFromTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TopArrowFromTop",
  component: TopArrowFromTop,
} as ComponentMeta<typeof TopArrowFromTop>;

const Template: ComponentStory<typeof TopArrowFromTop> = (
  args: TopArrowFromTopPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TopArrowFromTop {...args} />
    <TopArrowFromTop {...args} fill="red.500" />
    <TopArrowFromTop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
