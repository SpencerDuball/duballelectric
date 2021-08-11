import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PhoneTimes, PhoneTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhoneTimes",
  component: PhoneTimes,
} as ComponentMeta<typeof PhoneTimes>;

const Template: ComponentStory<typeof PhoneTimes> = (
  args: PhoneTimesPropsI
) => (
  <Box display="flex" gap="20px">
    <PhoneTimes {...args} />
    <PhoneTimes {...args} fill="red.500" />
    <PhoneTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
