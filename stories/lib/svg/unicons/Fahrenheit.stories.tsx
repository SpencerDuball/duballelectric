import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Fahrenheit, FahrenheitPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Fahrenheit",
  component: Fahrenheit,
} as ComponentMeta<typeof Fahrenheit>;

const Template: ComponentStory<typeof Fahrenheit> = (
  args: FahrenheitPropsI
) => (
  <x.div display="flex" gap="20px">
    <Fahrenheit {...args} />
    <Fahrenheit {...args} fill="red.500" />
    <Fahrenheit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
