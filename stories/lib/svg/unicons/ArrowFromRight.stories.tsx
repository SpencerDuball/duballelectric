import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowFromRight, ArrowFromRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowFromRight",
  component: ArrowFromRight,
} as ComponentMeta<typeof ArrowFromRight>;

const Template: ComponentStory<typeof ArrowFromRight> = (
  args: ArrowFromRightPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowFromRight {...args} />
    <ArrowFromRight {...args} fill="red.500" />
    <ArrowFromRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
