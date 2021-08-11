import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StepBackwardCircle, StepBackwardCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepBackwardCircle",
  component: StepBackwardCircle,
} as ComponentMeta<typeof StepBackwardCircle>;

const Template: ComponentStory<typeof StepBackwardCircle> = (
  args: StepBackwardCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <StepBackwardCircle {...args} />
    <StepBackwardCircle {...args} fill="red.500" />
    <StepBackwardCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
