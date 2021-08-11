import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowRight, ArrowRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowRight",
  component: ArrowRight,
} as ComponentMeta<typeof ArrowRight>;

const Template: ComponentStory<typeof ArrowRight> = (
  args: ArrowRightPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowRight {...args} />
    <ArrowRight {...args} fill="red.500" />
    <ArrowRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
