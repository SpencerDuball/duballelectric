import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CalendarAlt, CalendarAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CalendarAlt",
  component: CalendarAlt,
} as ComponentMeta<typeof CalendarAlt>;

const Template: ComponentStory<typeof CalendarAlt> = (
  args: CalendarAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CalendarAlt {...args} />
    <CalendarAlt {...args} fill="red.500" />
    <CalendarAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
