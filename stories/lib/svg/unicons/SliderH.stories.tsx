import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SliderH, SliderHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SliderH",
  component: SliderH,
} as ComponentMeta<typeof SliderH>;

const Template: ComponentStory<typeof SliderH> = (args: SliderHPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SliderH {...args} />
    <SliderH {...args} fill="red.500" />
    <SliderH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
