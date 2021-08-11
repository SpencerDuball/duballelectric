import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UsdCircle, UsdCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UsdCircle",
  component: UsdCircle,
} as ComponentMeta<typeof UsdCircle>;

const Template: ComponentStory<typeof UsdCircle> = (args: UsdCirclePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UsdCircle {...args} />
    <UsdCircle {...args} fill="red.500" />
    <UsdCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
