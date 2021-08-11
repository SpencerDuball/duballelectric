import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Star, StarPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Star",
  component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args: StarPropsI) => (
  <Box display="flex" gap="20px">
    <Star {...args} />
    <Star {...args} fill="red.500" />
    <Star {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
