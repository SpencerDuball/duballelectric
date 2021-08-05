import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MoneyBillStack, MoneyBillStackPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MoneyBillStack",
  component: MoneyBillStack,
} as ComponentMeta<typeof MoneyBillStack>;

const Template: ComponentStory<typeof MoneyBillStack> = (
  args: MoneyBillStackPropsI
) => (
  <x.div display="flex" gap="20px">
    <MoneyBillStack {...args} />
    <MoneyBillStack {...args} fill="red.500" />
    <MoneyBillStack {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
