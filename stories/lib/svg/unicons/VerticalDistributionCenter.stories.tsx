import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  VerticalDistributionCenter,
  VerticalDistributionCenterPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalDistributionCenter",
  component: VerticalDistributionCenter,
} as ComponentMeta<typeof VerticalDistributionCenter>;

const Template: ComponentStory<typeof VerticalDistributionCenter> = (
  args: VerticalDistributionCenterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VerticalDistributionCenter {...args} />
    <VerticalDistributionCenter {...args} fill="red.500" />
    <VerticalDistributionCenter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
