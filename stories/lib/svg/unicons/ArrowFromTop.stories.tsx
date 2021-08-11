import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowFromTop, ArrowFromTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowFromTop",
  component: ArrowFromTop,
} as ComponentMeta<typeof ArrowFromTop>;

const Template: ComponentStory<typeof ArrowFromTop> = (
  args: ArrowFromTopPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowFromTop {...args} />
    <ArrowFromTop {...args} fill="red.500" />
    <ArrowFromTop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
