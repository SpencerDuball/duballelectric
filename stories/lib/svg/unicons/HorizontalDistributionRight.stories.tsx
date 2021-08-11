import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  HorizontalDistributionRight,
  HorizontalDistributionRightPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalDistributionRight",
  component: HorizontalDistributionRight,
} as ComponentMeta<typeof HorizontalDistributionRight>;

const Template: ComponentStory<typeof HorizontalDistributionRight> = (
  args: HorizontalDistributionRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HorizontalDistributionRight {...args} />
    <HorizontalDistributionRight {...args} fill="red.500" />
    <HorizontalDistributionRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
