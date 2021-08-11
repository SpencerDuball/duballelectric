import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceFour, DiceFourPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceFour",
  component: DiceFour,
} as ComponentMeta<typeof DiceFour>;

const Template: ComponentStory<typeof DiceFour> = (args: DiceFourPropsI) => (
  <Box display="flex" gap="20px">
    <DiceFour {...args} />
    <DiceFour {...args} fill="red.500" />
    <DiceFour {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
