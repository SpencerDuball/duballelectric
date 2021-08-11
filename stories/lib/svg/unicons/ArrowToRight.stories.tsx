import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowToRight, ArrowToRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowToRight",
  component: ArrowToRight,
} as ComponentMeta<typeof ArrowToRight>;

const Template: ComponentStory<typeof ArrowToRight> = (
  args: ArrowToRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowToRight {...args} />
    <ArrowToRight {...args} fill="red.500" />
    <ArrowToRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
