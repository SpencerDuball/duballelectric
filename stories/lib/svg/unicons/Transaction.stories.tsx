import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Transaction, TransactionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Transaction",
  component: Transaction,
} as ComponentMeta<typeof Transaction>;

const Template: ComponentStory<typeof Transaction> = (
  args: TransactionPropsI
) => (
  <x.div display="flex" gap="20px">
    <Transaction {...args} />
    <Transaction {...args} fill="red.500" />
    <Transaction {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
