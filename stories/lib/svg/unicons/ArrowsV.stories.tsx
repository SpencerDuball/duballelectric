import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsV, ArrowsVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsV",
  component: ArrowsV,
} as ComponentMeta<typeof ArrowsV>;

const Template: ComponentStory<typeof ArrowsV> = (args: ArrowsVPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsV {...args} />
    <ArrowsV {...args} fill="red.500" />
    <ArrowsV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
