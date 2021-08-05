import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShoppingCart, ShoppingCartPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ShoppingCart",
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (
  args: ShoppingCartPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShoppingCart {...args} />
    <ShoppingCart {...args} fill="red.500" />
    <ShoppingCart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
