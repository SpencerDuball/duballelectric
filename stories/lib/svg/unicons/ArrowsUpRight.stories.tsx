import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsUpRight, ArrowsUpRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsUpRight",
  component: ArrowsUpRight,
} as ComponentMeta<typeof ArrowsUpRight>;

const Template: ComponentStory<typeof ArrowsUpRight> = (
  args: ArrowsUpRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsUpRight {...args} />
    <ArrowsUpRight {...args} fill="red.500" />
    <ArrowsUpRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
