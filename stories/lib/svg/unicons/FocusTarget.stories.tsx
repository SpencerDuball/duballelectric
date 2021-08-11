import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FocusTarget, FocusTargetPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FocusTarget",
  component: FocusTarget,
} as ComponentMeta<typeof FocusTarget>;

const Template: ComponentStory<typeof FocusTarget> = (
  args: FocusTargetPropsI
) => (
  <Box display="flex" gap="20px">
    <FocusTarget {...args} />
    <FocusTarget {...args} fill="red.500" />
    <FocusTarget {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
