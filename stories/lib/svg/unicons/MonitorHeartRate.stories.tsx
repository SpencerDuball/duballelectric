import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MonitorHeartRate, MonitorHeartRatePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MonitorHeartRate",
  component: MonitorHeartRate,
} as ComponentMeta<typeof MonitorHeartRate>;

const Template: ComponentStory<typeof MonitorHeartRate> = (
  args: MonitorHeartRatePropsI
) => (
  <x.div display="flex" gap="20px">
    <MonitorHeartRate {...args} />
    <MonitorHeartRate {...args} fill="red.500" />
    <MonitorHeartRate {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
