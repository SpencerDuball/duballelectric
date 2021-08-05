import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CreateDashboard, CreateDashboardPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CreateDashboard",
  component: CreateDashboard,
} as ComponentMeta<typeof CreateDashboard>;

const Template: ComponentStory<typeof CreateDashboard> = (
  args: CreateDashboardPropsI
) => (
  <x.div display="flex" gap="20px">
    <CreateDashboard {...args} />
    <CreateDashboard {...args} fill="red.500" />
    <CreateDashboard {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
