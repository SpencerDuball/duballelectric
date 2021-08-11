import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StepBackward, StepBackwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepBackward",
  component: StepBackward,
} as ComponentMeta<typeof StepBackward>;

const Template: ComponentStory<typeof StepBackward> = (
  args: StepBackwardPropsI
) => (
  <Box display="flex" gap="20px">
    <StepBackward {...args} />
    <StepBackward {...args} fill="red.500" />
    <StepBackward {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
