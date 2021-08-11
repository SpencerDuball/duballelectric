import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowUpRight, ArrowUpRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowUpRight",
  component: ArrowUpRight,
} as ComponentMeta<typeof ArrowUpRight>;

const Template: ComponentStory<typeof ArrowUpRight> = (
  args: ArrowUpRightPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowUpRight {...args} />
    <ArrowUpRight {...args} fill="red.500" />
    <ArrowUpRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
