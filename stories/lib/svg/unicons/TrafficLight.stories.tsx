import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TrafficLight, TrafficLightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrafficLight",
  component: TrafficLight,
} as ComponentMeta<typeof TrafficLight>;

const Template: ComponentStory<typeof TrafficLight> = (
  args: TrafficLightPropsI
) => (
  <x.div display="flex" gap="20px">
    <TrafficLight {...args} />
    <TrafficLight {...args} fill="red.500" />
    <TrafficLight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
