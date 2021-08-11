import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StopCircle, StopCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StopCircle",
  component: StopCircle,
} as ComponentMeta<typeof StopCircle>;

const Template: ComponentStory<typeof StopCircle> = (
  args: StopCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <StopCircle {...args} />
    <StopCircle {...args} fill="red.500" />
    <StopCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
