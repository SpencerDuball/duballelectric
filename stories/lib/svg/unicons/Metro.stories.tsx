import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Metro, MetroPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Metro",
  component: Metro,
} as ComponentMeta<typeof Metro>;

const Template: ComponentStory<typeof Metro> = (args: MetroPropsI) => (
  <Box display="flex" gap="20px">
    <Metro {...args} />
    <Metro {...args} fill="red.500" />
    <Metro {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
