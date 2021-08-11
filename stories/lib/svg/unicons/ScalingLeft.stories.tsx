import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ScalingLeft, ScalingLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ScalingLeft",
  component: ScalingLeft,
} as ComponentMeta<typeof ScalingLeft>;

const Template: ComponentStory<typeof ScalingLeft> = (
  args: ScalingLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <ScalingLeft {...args} />
    <ScalingLeft {...args} fill="red.500" />
    <ScalingLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
