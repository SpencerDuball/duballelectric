import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudWifi, CloudWifiPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudWifi",
  component: CloudWifi,
} as ComponentMeta<typeof CloudWifi>;

const Template: ComponentStory<typeof CloudWifi> = (args: CloudWifiPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudWifi {...args} />
    <CloudWifi {...args} fill="red.500" />
    <CloudWifi {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
