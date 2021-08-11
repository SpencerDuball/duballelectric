import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dashboard, DashboardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dashboard",
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args: DashboardPropsI) => (
  <Box display="flex" gap="20px">
    <Dashboard {...args} />
    <Dashboard {...args} fill="red.500" />
    <Dashboard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
