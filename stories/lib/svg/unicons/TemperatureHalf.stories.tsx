import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TemperatureHalf, TemperatureHalfPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TemperatureHalf",
  component: TemperatureHalf,
} as ComponentMeta<typeof TemperatureHalf>;

const Template: ComponentStory<typeof TemperatureHalf> = (
  args: TemperatureHalfPropsI
) => (
  <x.div display="flex" gap="20px">
    <TemperatureHalf {...args} />
    <TemperatureHalf {...args} fill="red.500" />
    <TemperatureHalf {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
