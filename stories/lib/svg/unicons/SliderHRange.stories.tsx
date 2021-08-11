import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SliderHRange, SliderHRangePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SliderHRange",
  component: SliderHRange,
} as ComponentMeta<typeof SliderHRange>;

const Template: ComponentStory<typeof SliderHRange> = (
  args: SliderHRangePropsI
) => (
  <Box display="flex" gap="20px">
    <SliderHRange {...args} />
    <SliderHRange {...args} fill="red.500" />
    <SliderHRange {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
