import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Heartbeat, HeartbeatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Heartbeat",
  component: Heartbeat,
} as ComponentMeta<typeof Heartbeat>;

const Template: ComponentStory<typeof Heartbeat> = (args: HeartbeatPropsI) => (
  <x.div display="flex" gap="20px">
    <Heartbeat {...args} />
    <Heartbeat {...args} fill="red.500" />
    <Heartbeat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
