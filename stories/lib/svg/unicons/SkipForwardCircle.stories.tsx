import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SkipForwardCircle, SkipForwardCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SkipForwardCircle",
  component: SkipForwardCircle,
} as ComponentMeta<typeof SkipForwardCircle>;

const Template: ComponentStory<typeof SkipForwardCircle> = (
  args: SkipForwardCirclePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SkipForwardCircle {...args} />
    <SkipForwardCircle {...args} fill="red.500" />
    <SkipForwardCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
