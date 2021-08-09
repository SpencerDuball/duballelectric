import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Clock, ClockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Clock",
  component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args: ClockPropsI) => (
  <x.div display="flex" gap="20px">
    <Clock {...args} />
    <Clock {...args} fill="red.500" />
    <Clock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
