import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowUpLeft, ArrowUpLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowUpLeft",
  component: ArrowUpLeft,
} as ComponentMeta<typeof ArrowUpLeft>;

const Template: ComponentStory<typeof ArrowUpLeft> = (
  args: ArrowUpLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowUpLeft {...args} />
    <ArrowUpLeft {...args} fill="red.500" />
    <ArrowUpLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
