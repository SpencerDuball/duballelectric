import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MonitorHeartRate, MonitorHeartRatePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MonitorHeartRate",
  component: MonitorHeartRate,
} as ComponentMeta<typeof MonitorHeartRate>;

const Template: ComponentStory<typeof MonitorHeartRate> = (
  args: MonitorHeartRatePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MonitorHeartRate {...args} />
    <MonitorHeartRate {...args} fill="red.500" />
    <MonitorHeartRate {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
