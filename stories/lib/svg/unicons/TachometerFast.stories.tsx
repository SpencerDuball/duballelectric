import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TachometerFast, TachometerFastPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TachometerFast",
  component: TachometerFast,
} as ComponentMeta<typeof TachometerFast>;

const Template: ComponentStory<typeof TachometerFast> = (
  args: TachometerFastPropsI
) => (
  <Box display="flex" gap="20px">
    <TachometerFast {...args} />
    <TachometerFast {...args} fill="red.500" />
    <TachometerFast {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
