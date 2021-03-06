import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pagerduty, PagerdutyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pagerduty",
  component: Pagerduty,
} as ComponentMeta<typeof Pagerduty>;

const Template: ComponentStory<typeof Pagerduty> = (args: PagerdutyPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Pagerduty {...args} />
    <Pagerduty {...args} fill="red.500" />
    <Pagerduty {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
