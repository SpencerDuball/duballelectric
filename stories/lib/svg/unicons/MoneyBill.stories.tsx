import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MoneyBill, MoneyBillPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MoneyBill",
  component: MoneyBill,
} as ComponentMeta<typeof MoneyBill>;

const Template: ComponentStory<typeof MoneyBill> = (args: MoneyBillPropsI) => (
  <x.div display="flex" gap="20px">
    <MoneyBill {...args} />
    <MoneyBill {...args} fill="red.500" />
    <MoneyBill {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
