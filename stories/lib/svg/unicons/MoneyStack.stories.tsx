import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MoneyStack, MoneyStackPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MoneyStack",
  component: MoneyStack,
} as ComponentMeta<typeof MoneyStack>;

const Template: ComponentStory<typeof MoneyStack> = (
  args: MoneyStackPropsI
) => (
  <x.div display="flex" gap="20px">
    <MoneyStack {...args} />
    <MoneyStack {...args} fill="red.500" />
    <MoneyStack {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
