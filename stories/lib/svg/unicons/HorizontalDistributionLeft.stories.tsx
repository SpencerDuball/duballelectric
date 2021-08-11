import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  HorizontalDistributionLeft,
  HorizontalDistributionLeftPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalDistributionLeft",
  component: HorizontalDistributionLeft,
} as ComponentMeta<typeof HorizontalDistributionLeft>;

const Template: ComponentStory<typeof HorizontalDistributionLeft> = (
  args: HorizontalDistributionLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HorizontalDistributionLeft {...args} />
    <HorizontalDistributionLeft {...args} fill="red.500" />
    <HorizontalDistributionLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
