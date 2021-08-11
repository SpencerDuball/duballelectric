import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Van, VanPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Van",
  component: Van,
} as ComponentMeta<typeof Van>;

const Template: ComponentStory<typeof Van> = (args: VanPropsI) => (
  <Box display="flex" gap="20px">
    <Van {...args} />
    <Van {...args} fill="red.500" />
    <Van {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
