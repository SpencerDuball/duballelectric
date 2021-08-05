import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TemperatureQuarter, TemperatureQuarterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TemperatureQuarter",
  component: TemperatureQuarter,
} as ComponentMeta<typeof TemperatureQuarter>;

const Template: ComponentStory<typeof TemperatureQuarter> = (
  args: TemperatureQuarterPropsI
) => (
  <x.div display="flex" gap="20px">
    <TemperatureQuarter {...args} />
    <TemperatureQuarter {...args} fill="red.500" />
    <TemperatureQuarter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
