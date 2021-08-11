import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ScalingRight, ScalingRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ScalingRight",
  component: ScalingRight,
} as ComponentMeta<typeof ScalingRight>;

const Template: ComponentStory<typeof ScalingRight> = (
  args: ScalingRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ScalingRight {...args} />
    <ScalingRight {...args} fill="red.500" />
    <ScalingRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
