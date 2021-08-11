import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Glass, GlassPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Glass",
  component: Glass,
} as ComponentMeta<typeof Glass>;

const Template: ComponentStory<typeof Glass> = (args: GlassPropsI) => (
  <Box display="flex" gap="20px">
    <Glass {...args} />
    <Glass {...args} fill="red.500" />
    <Glass {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
