import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Amazon, AmazonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Amazon",
  component: Amazon,
} as ComponentMeta<typeof Amazon>;

const Template: ComponentStory<typeof Amazon> = (args: AmazonPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Amazon {...args} />
    <Amazon {...args} fill="red.500" />
    <Amazon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
