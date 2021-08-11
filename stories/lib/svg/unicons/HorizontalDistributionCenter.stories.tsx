import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  HorizontalDistributionCenter,
  HorizontalDistributionCenterPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalDistributionCenter",
  component: HorizontalDistributionCenter,
} as ComponentMeta<typeof HorizontalDistributionCenter>;

const Template: ComponentStory<typeof HorizontalDistributionCenter> = (
  args: HorizontalDistributionCenterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HorizontalDistributionCenter {...args} />
    <HorizontalDistributionCenter {...args} fill="red.500" />
    <HorizontalDistributionCenter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
