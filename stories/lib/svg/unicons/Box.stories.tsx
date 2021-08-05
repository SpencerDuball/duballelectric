import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Box, BoxPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: BoxPropsI) => (
  <x.div display="flex" gap="20px">
    <Box {...args} />
    <Box {...args} fill="red.500" />
    <Box {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
