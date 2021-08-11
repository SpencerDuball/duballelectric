import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowCircleRight, ArrowCircleRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowCircleRight",
  component: ArrowCircleRight,
} as ComponentMeta<typeof ArrowCircleRight>;

const Template: ComponentStory<typeof ArrowCircleRight> = (
  args: ArrowCircleRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowCircleRight {...args} />
    <ArrowCircleRight {...args} fill="red.500" />
    <ArrowCircleRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
