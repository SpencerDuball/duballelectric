import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Stopwatch, StopwatchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Stopwatch",
  component: Stopwatch,
} as ComponentMeta<typeof Stopwatch>;

const Template: ComponentStory<typeof Stopwatch> = (args: StopwatchPropsI) => (
  <x.div display="flex" gap="20px">
    <Stopwatch {...args} />
    <Stopwatch {...args} fill="red.500" />
    <Stopwatch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
