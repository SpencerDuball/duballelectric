import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsResize, ArrowsResizePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsResize",
  component: ArrowsResize,
} as ComponentMeta<typeof ArrowsResize>;

const Template: ComponentStory<typeof ArrowsResize> = (
  args: ArrowsResizePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsResize {...args} />
    <ArrowsResize {...args} fill="red.500" />
    <ArrowsResize {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
