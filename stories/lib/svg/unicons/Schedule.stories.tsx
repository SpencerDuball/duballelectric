import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Schedule, SchedulePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Schedule",
  component: Schedule,
} as ComponentMeta<typeof Schedule>;

const Template: ComponentStory<typeof Schedule> = (args: SchedulePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Schedule {...args} />
    <Schedule {...args} fill="red.500" />
    <Schedule {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
