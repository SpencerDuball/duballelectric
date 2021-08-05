import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  TemperatureThreeQuarter,
  TemperatureThreeQuarterPropsI,
} from "lib/svg";

export default {
  title: "lib/svg/unicons/TemperatureThreeQuarter",
  component: TemperatureThreeQuarter,
} as ComponentMeta<typeof TemperatureThreeQuarter>;

const Template: ComponentStory<typeof TemperatureThreeQuarter> = (
  args: TemperatureThreeQuarterPropsI
) => (
  <x.div display="flex" gap="20px">
    <TemperatureThreeQuarter {...args} />
    <TemperatureThreeQuarter {...args} fill="red.500" />
    <TemperatureThreeQuarter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
