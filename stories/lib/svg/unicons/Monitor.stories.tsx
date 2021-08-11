import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Monitor, MonitorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Monitor",
  component: Monitor,
} as ComponentMeta<typeof Monitor>;

const Template: ComponentStory<typeof Monitor> = (args: MonitorPropsI) => (
  <Box display="flex" gap="20px">
    <Monitor {...args} />
    <Monitor {...args} fill="red.500" />
    <Monitor {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
