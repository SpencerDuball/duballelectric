import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClockNine, ClockNinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockNine",
  component: ClockNine,
} as ComponentMeta<typeof ClockNine>;

const Template: ComponentStory<typeof ClockNine> = (args: ClockNinePropsI) => (
  <Box display="flex" gap="20px">
    <ClockNine {...args} />
    <ClockNine {...args} fill="red.500" />
    <ClockNine {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
