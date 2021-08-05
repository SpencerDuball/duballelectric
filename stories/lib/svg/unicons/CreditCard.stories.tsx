import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CreditCard, CreditCardPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CreditCard",
  component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (
  args: CreditCardPropsI
) => (
  <x.div display="flex" gap="20px">
    <CreditCard {...args} />
    <CreditCard {...args} fill="red.500" />
    <CreditCard {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
