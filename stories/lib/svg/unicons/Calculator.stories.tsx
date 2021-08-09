import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Calculator, CalculatorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calculator",
  component: Calculator,
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (
  args: CalculatorPropsI
) => (
  <x.div display="flex" gap="20px">
    <Calculator {...args} />
    <Calculator {...args} fill="red.500" />
    <Calculator {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
