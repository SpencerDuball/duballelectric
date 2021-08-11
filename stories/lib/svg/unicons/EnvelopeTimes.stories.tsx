import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeTimes, EnvelopeTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeTimes",
  component: EnvelopeTimes,
} as ComponentMeta<typeof EnvelopeTimes>;

const Template: ComponentStory<typeof EnvelopeTimes> = (
  args: EnvelopeTimesPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeTimes {...args} />
    <EnvelopeTimes {...args} fill="red.500" />
    <EnvelopeTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
