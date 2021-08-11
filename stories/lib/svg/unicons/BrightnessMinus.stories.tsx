import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrightnessMinus, BrightnessMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessMinus",
  component: BrightnessMinus,
} as ComponentMeta<typeof BrightnessMinus>;

const Template: ComponentStory<typeof BrightnessMinus> = (
  args: BrightnessMinusPropsI
) => (
  <Box display="flex" gap="20px">
    <BrightnessMinus {...args} />
    <BrightnessMinus {...args} fill="red.500" />
    <BrightnessMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
