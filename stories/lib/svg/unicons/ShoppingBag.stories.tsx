import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShoppingBag, ShoppingBagPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ShoppingBag",
  component: ShoppingBag,
} as ComponentMeta<typeof ShoppingBag>;

const Template: ComponentStory<typeof ShoppingBag> = (
  args: ShoppingBagPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShoppingBag {...args} />
    <ShoppingBag {...args} fill="red.500" />
    <ShoppingBag {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
