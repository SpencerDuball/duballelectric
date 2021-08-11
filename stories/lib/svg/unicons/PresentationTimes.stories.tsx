import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationTimes, PresentationTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationTimes",
  component: PresentationTimes,
} as ComponentMeta<typeof PresentationTimes>;

const Template: ComponentStory<typeof PresentationTimes> = (
  args: PresentationTimesPropsI
) => (
  <Box display="flex" gap="20px">
    <PresentationTimes {...args} />
    <PresentationTimes {...args} fill="red.500" />
    <PresentationTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
