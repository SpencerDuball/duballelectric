import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TimesCircle, TimesCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TimesCircle",
  component: TimesCircle,
} as ComponentMeta<typeof TimesCircle>;

const Template: ComponentStory<typeof TimesCircle> = (
  args: TimesCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <TimesCircle {...args} />
    <TimesCircle {...args} fill="red.500" />
    <TimesCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
