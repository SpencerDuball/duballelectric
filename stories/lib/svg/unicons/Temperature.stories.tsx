import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Temperature, TemperaturePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Temperature",
  component: Temperature,
} as ComponentMeta<typeof Temperature>;

const Template: ComponentStory<typeof Temperature> = (
  args: TemperaturePropsI
) => (
  <x.div display="flex" gap="20px">
    <Temperature {...args} />
    <Temperature {...args} fill="red.500" />
    <Temperature {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
