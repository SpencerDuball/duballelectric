import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockEight, ClockEightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockEight",
  component: ClockEight,
} as ComponentMeta<typeof ClockEight>;

const Template: ComponentStory<typeof ClockEight> = (
  args: ClockEightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ClockEight {...args} />
    <ClockEight {...args} fill="red.500" />
    <ClockEight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
