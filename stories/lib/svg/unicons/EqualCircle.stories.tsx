import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EqualCircle, EqualCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EqualCircle",
  component: EqualCircle,
} as ComponentMeta<typeof EqualCircle>;

const Template: ComponentStory<typeof EqualCircle> = (
  args: EqualCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EqualCircle {...args} />
    <EqualCircle {...args} fill="red.500" />
    <EqualCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
