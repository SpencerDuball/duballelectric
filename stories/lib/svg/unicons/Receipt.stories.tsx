import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Receipt, ReceiptPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Receipt",
  component: Receipt,
} as ComponentMeta<typeof Receipt>;

const Template: ComponentStory<typeof Receipt> = (args: ReceiptPropsI) => (
  <x.div display="flex" gap="20px">
    <Receipt {...args} />
    <Receipt {...args} fill="red.500" />
    <Receipt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
