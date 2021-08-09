import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TemperatureMinus, TemperatureMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperatureMinus",
  component: TemperatureMinus,
} as ComponentMeta<typeof TemperatureMinus>;

const Template: ComponentStory<typeof TemperatureMinus> = (
  args: TemperatureMinusPropsI
) => (
  <x.div display="flex" gap="20px">
    <TemperatureMinus {...args} />
    <TemperatureMinus {...args} fill="red.500" />
    <TemperatureMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
