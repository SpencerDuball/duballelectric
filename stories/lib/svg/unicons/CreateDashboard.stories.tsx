import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CreateDashboard, CreateDashboardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CreateDashboard",
  component: CreateDashboard,
} as ComponentMeta<typeof CreateDashboard>;

const Template: ComponentStory<typeof CreateDashboard> = (
  args: CreateDashboardPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CreateDashboard {...args} />
    <CreateDashboard {...args} fill="red.500" />
    <CreateDashboard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
