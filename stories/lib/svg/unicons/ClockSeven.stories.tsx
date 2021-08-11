import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockSeven, ClockSevenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockSeven",
  component: ClockSeven,
} as ComponentMeta<typeof ClockSeven>;

const Template: ComponentStory<typeof ClockSeven> = (
  args: ClockSevenPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ClockSeven {...args} />
    <ClockSeven {...args} fill="red.500" />
    <ClockSeven {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
