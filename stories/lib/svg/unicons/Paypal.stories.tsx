import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Paypal, PaypalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Paypal",
  component: Paypal,
} as ComponentMeta<typeof Paypal>;

const Template: ComponentStory<typeof Paypal> = (args: PaypalPropsI) => (
  <x.div display="flex" gap="20px">
    <Paypal {...args} />
    <Paypal {...args} fill="red.500" />
    <Paypal {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
