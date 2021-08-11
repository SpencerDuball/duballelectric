import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CheckCircle, CheckCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CheckCircle",
  component: CheckCircle,
} as ComponentMeta<typeof CheckCircle>;

const Template: ComponentStory<typeof CheckCircle> = (
  args: CheckCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CheckCircle {...args} />
    <CheckCircle {...args} fill="red.500" />
    <CheckCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
