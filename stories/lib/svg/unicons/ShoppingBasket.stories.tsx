import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShoppingBasket, ShoppingBasketPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ShoppingBasket",
  component: ShoppingBasket,
} as ComponentMeta<typeof ShoppingBasket>;

const Template: ComponentStory<typeof ShoppingBasket> = (
  args: ShoppingBasketPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShoppingBasket {...args} />
    <ShoppingBasket {...args} fill="red.500" />
    <ShoppingBasket {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
