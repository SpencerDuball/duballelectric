import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AdjustCircle, AdjustCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AdjustCircle",
  component: AdjustCircle,
} as ComponentMeta<typeof AdjustCircle>;

const Template: ComponentStory<typeof AdjustCircle> = (
  args: AdjustCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <AdjustCircle {...args} />
    <AdjustCircle {...args} fill="red.500" />
    <AdjustCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
