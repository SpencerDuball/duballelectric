import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PhonePause, PhonePausePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhonePause",
  component: PhonePause,
} as ComponentMeta<typeof PhonePause>;

const Template: ComponentStory<typeof PhonePause> = (
  args: PhonePausePropsI
) => (
  <Box display="flex" gap="20px">
    <PhonePause {...args} />
    <PhonePause {...args} fill="red.500" />
    <PhonePause {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
