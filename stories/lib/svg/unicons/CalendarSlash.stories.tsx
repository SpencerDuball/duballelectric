import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CalendarSlash, CalendarSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CalendarSlash",
  component: CalendarSlash,
} as ComponentMeta<typeof CalendarSlash>;

const Template: ComponentStory<typeof CalendarSlash> = (
  args: CalendarSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CalendarSlash {...args} />
    <CalendarSlash {...args} fill="red.500" />
    <CalendarSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
