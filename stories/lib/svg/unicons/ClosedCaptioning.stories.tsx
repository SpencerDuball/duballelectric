import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClosedCaptioning, ClosedCaptioningPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClosedCaptioning",
  component: ClosedCaptioning,
} as ComponentMeta<typeof ClosedCaptioning>;

const Template: ComponentStory<typeof ClosedCaptioning> = (
  args: ClosedCaptioningPropsI
) => (
  <Box display="flex" gap="20px">
    <ClosedCaptioning {...args} />
    <ClosedCaptioning {...args} fill="red.500" />
    <ClosedCaptioning {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
