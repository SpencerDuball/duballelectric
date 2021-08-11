import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExpandRight, ExpandRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandRight",
  component: ExpandRight,
} as ComponentMeta<typeof ExpandRight>;

const Template: ComponentStory<typeof ExpandRight> = (
  args: ExpandRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExpandRight {...args} />
    <ExpandRight {...args} fill="red.500" />
    <ExpandRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
