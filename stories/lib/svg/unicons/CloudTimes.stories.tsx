import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudTimes, CloudTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudTimes",
  component: CloudTimes,
} as ComponentMeta<typeof CloudTimes>;

const Template: ComponentStory<typeof CloudTimes> = (
  args: CloudTimesPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudTimes {...args} />
    <CloudTimes {...args} fill="red.500" />
    <CloudTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
