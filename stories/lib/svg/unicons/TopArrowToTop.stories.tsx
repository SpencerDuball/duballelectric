import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TopArrowToTop, TopArrowToTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TopArrowToTop",
  component: TopArrowToTop,
} as ComponentMeta<typeof TopArrowToTop>;

const Template: ComponentStory<typeof TopArrowToTop> = (
  args: TopArrowToTopPropsI
) => (
  <Box display="flex" gap="20px">
    <TopArrowToTop {...args} />
    <TopArrowToTop {...args} fill="red.500" />
    <TopArrowToTop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
