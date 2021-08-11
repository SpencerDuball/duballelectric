import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { StepBackwardAlt, StepBackwardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepBackwardAlt",
  component: StepBackwardAlt,
} as ComponentMeta<typeof StepBackwardAlt>;

const Template: ComponentStory<typeof StepBackwardAlt> = (
  args: StepBackwardAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <StepBackwardAlt {...args} />
    <StepBackwardAlt {...args} fill="red.500" />
    <StepBackwardAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
