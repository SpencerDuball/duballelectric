import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MoneyWithdrawal, MoneyWithdrawalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MoneyWithdrawal",
  component: MoneyWithdrawal,
} as ComponentMeta<typeof MoneyWithdrawal>;

const Template: ComponentStory<typeof MoneyWithdrawal> = (
  args: MoneyWithdrawalPropsI
) => (
  <x.div display="flex" gap="20px">
    <MoneyWithdrawal {...args} />
    <MoneyWithdrawal {...args} fill="red.500" />
    <MoneyWithdrawal {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
