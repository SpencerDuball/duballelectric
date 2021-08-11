import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FlipH, FlipHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FlipH",
  component: FlipH,
} as ComponentMeta<typeof FlipH>;

const Template: ComponentStory<typeof FlipH> = (args: FlipHPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FlipH {...args} />
    <FlipH {...args} fill="red.500" />
    <FlipH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
