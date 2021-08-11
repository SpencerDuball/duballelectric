import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StepForward, StepForwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepForward",
  component: StepForward,
} as ComponentMeta<typeof StepForward>;

const Template: ComponentStory<typeof StepForward> = (
  args: StepForwardPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <StepForward {...args} />
    <StepForward {...args} fill="red.500" />
    <StepForward {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
