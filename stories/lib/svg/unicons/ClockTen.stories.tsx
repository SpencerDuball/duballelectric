import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockTen, ClockTenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockTen",
  component: ClockTen,
} as ComponentMeta<typeof ClockTen>;

const Template: ComponentStory<typeof ClockTen> = (args: ClockTenPropsI) => (
  <Box display="flex" gap="20px">
    <ClockTen {...args} />
    <ClockTen {...args} fill="red.500" />
    <ClockTen {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
